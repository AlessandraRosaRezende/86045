const express = require('express');
const usersRouter = require('./routes/users');
const errorHandler = require('./middlewares/errors');

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);
app.use(errorHandler);

app.listen(8080, () => {
  console.log('App listening on port 8080');
});