const { Router } = require('express');
const CustomError = require('../services/errors/CustomError');
const EErrors = require('../services/errors/enums');
const generateUserErrorInfo = require('../services/errors/info');

const users = [];

const router = Router();

router.get('/', (req, res) => {
  res.send({ status: 'success', payload: users });
});

router.post('/', (req, res) => {
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email || typeof first_name !== 'string' || typeof last_name !== 'string' || typeof email !== 'string') {
    CustomError.createError({
      name: 'User creation error',
      cause: generateUserErrorInfo({ first_name, last_name, email }),
      message: 'Error trying to create a new user',
      code: EErrors.INVALID_TYPES_ERROR,
    });
  } 

  const user = {
    first_name,
    last_name,
    email,
  };

  if (users.length === 0) {
    user.id = 1;
  } else {
    user.id = users[users.length - 1].id + 1;
  }

  users.push(user);
  res.send({ status: 'success', payload: user });
});

module.exports = router;