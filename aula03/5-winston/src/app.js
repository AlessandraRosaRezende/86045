const express = require('express');
const logMid = require('./middlewares/logMid');

const app = express();

app.use(logMid);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(8080, () => console.log('App listening on port 8080!'));