const express = require('express');
const logMid = require('./middlewares/logMid');

const app = express();

app.use(logMid);

app.get('/hello', (req, res) => {
  req.logger.info('Hello route accessed');
  req.logger.warn('This is a warning message');
  req.logger.error('This is an error message');
  res.send('Hello, world!');
});

app.listen(8080, () => console.log('App listening on port 8080!'));