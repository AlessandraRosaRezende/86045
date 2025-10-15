const express = require('express');
const logMid = require('./middlewares/logMid');

const app = express();

app.use(logMid);

app.get('/', (req, res) => {
  req.logger.warning('Alerta!!!')
  req.logger.info('Informação')
  req.logger.fatal('Fatal')
  req.logger.debug('Debug')
  req.logger.error('Erro')
  res.send('Teste de logger');
});

app.listen(8080, () => {
  console.log('App listening on port 8080');
});