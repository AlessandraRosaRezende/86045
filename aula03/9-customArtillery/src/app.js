const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/connection');
const sessaoRoutes = require('./routes/sessao');
const {faker} = require('@faker-js/faker');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

connection();

const PORT = process.env.PORT || 8080;

app.use('/api/sessao', sessaoRoutes);
app.get('/gerar-usuario-teste', async (req, res) => {
    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const email = faker.internet.email();
    const senha = faker.internet.password();

    console.log(`Gerando usuário de teste: nome=${nome}, sobrenome=${sobrenome}, email=${email}, senha=${senha}`);

    res.json({ nome, sobrenome, email, senha });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});