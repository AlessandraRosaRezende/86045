const express = require('express');

const app = express();

app.get('/stringridiculamentegrande', (req, res) => {
  let string = 'Olá Coders, sou uma string ridiculamente grande!';
  for (let i = 0; i < 10000000; i++) {
    string += ' Olá Coders, sou uma string ridiculamente grande!';
  }
  res.send(string);
});

app.listen(8080, () => {
  console.log('App listening on port 8080');
});