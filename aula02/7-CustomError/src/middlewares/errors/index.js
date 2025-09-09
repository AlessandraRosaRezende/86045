const EErrors = require('../../services/errors/enums');

module.exports = (err, req, res, next) => {
  console.log(err.cause);
  switch (err.code) {
    case EErrors.INVALID_TYPES_ERROR:
      res.status(400).send({ status: 'error', error: err.cause });
      break;
    default:
      res.status(500).send({ status: 'error', message: 'Internal server error' });
  }
}