const { Router } = require('express');
const { generateUser } = require('../utils');

const router = Router();

router.get('/', (req, res) => {
  let users = [];

  for (let i = 0; i < 10; i++) {
    users.push(generateUser());
  }
  return res.send({ status: 'success', payload: users });
});

module.exports = router;