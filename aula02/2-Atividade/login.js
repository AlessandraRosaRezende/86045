function login(username, password) {
  const correctUsername = 'coderUser';
  const correctPassword = '123';

  if (!password) return 'Sem senha fornecida'
  if (!username) return 'Nenhum usuário fornecido'
  if (password !== correctPassword) return 'Senha Errada'
  if (username !== correctUsername) return 'Credenciais incorretas'

  return 'conectado'
}

module.exports = login;
