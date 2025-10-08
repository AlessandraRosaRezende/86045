const express = require('express');
const usersRouter = require('./routes/usersRouter');

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.listen(8080, () => {
  console.log('App listening on port 8080!');
});