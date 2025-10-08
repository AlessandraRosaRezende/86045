const login = require('./login');

// Inicialização das variáveis de contagem de testes
let testesAprovados = 0;
let testesTotais = 5;

// Teste 1: Senha vazia
console.log('Teste 1: A função deve retornar "Sem senha fornecida" se a senha estiver vazia');
let resultadoTeste1 = login('coderUser', '');
if (resultadoTeste1 === 'Sem senha fornecida') {
  console.log('Teste 1 passou');
  testesAprovados++;
} else {
  console.log(`Falha no teste 1, recebeu "${resultadoTeste1}", mas esperava "Sem senha fornecida"`);
}

// Teste 2: Usuário vazio
console.log('Teste 2: A função deve retornar "Nenhum usuário fornecido" se o usuário estiver vazio');
let resultadoTeste2 = login('', '123');
if (resultadoTeste2 === 'Nenhum usuário fornecido') {
  console.log('Teste 2 passou');
  testesAprovados++;
} else {
  console.log(`Falha no teste 2, recebeu "${resultadoTeste2}", mas esperava "Nenhum usuário fornecido"`);
}

// Teste 3: Senha errada
console.log('Teste 3: A função deve retornar "Senha Errada" se a senha estiver incorreta');
let resultadoTeste3 = login('coderUser', 'wrongPassword');
if (resultadoTeste3 === 'Senha Errada') {
  console.log('Teste 3 passou');
  testesAprovados++;
} else {
  console.log(`Falha no teste 3, recebeu "${resultadoTeste3}", mas esperava "Senha Errada"`);
}

// Teste 4: Usuário errado
console.log('Teste 4: A função deve retornar "Credenciais incorretas" se o usuário estiver incorreto');
let resultadoTeste4 = login('wrongUser', '123');
if (resultadoTeste4 === 'Credenciais incorretas') {
  console.log('Teste 4 passou');
  testesAprovados++;
} else {
  console.log(`Falha no teste 4, recebeu "${resultadoTeste4}", mas esperava "Credenciais incorretas"`);
}

// Teste 5: Credenciais corretas
console.log('Teste 5: A função deve retornar "conectado" se o usuário e a senha estiverem corretos');
let resultadoTeste5 = login('coderUser', '123');
if (resultadoTeste5 === 'conectado') {
  console.log('Teste 5 passou');
  testesAprovados++;
} else {
  console.log(`Falha no teste 5, recebeu "${resultadoTeste5}", mas esperava "conectado"`);
}

// Verificação final
if (testesAprovados === testesTotais) {
  console.log('Todos os testes passaram com sucesso');
} else {
  console.log(`${testesAprovados} testes aprovados de um total de ${testesTotais} testes`);
}
