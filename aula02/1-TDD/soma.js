// Declaração da função 'soma' que recebe dois parâmetros: 'num1' e 'num2'
// A função está vazia, então não realiza nenhuma operação e retorna 'undefined' por padrão
const soma = (...numeros) => {
  // if (numeros.length === 0) return 0;
  // let validInput = true;
  // for (let index = 0; index < numeros.length && validInput; index++) {
  //   if (typeof numeros[index] !== 'number') validInput = false;
  // }

  // if (!validInput) return null;
  // let resultado = 0;
  // for (let index = 0; index < numeros.length; index++) {
  //   resultado += numeros[index];
  // }
  // return resultado;

  if (numeros.length === 0) return 0;
  if (!numeros.every(num => typeof num === 'number')) return null;
  return numeros.reduce((prev, curr) => prev + curr);
}

// Aqui estamos criando duas "caixas" (ou "variáveis") para guardar informações.
// Uma caixa chamada 'testesAprovados' para contar quantos testes passaram e outra chamada 'testesTotais' para contar o total de testes.
let testesAprovados = 0;
let testesTotais = 4;

// Agora vamos testar nossa função 'soma' para ver se ela está funcionando corretamente.

// Teste 1: Verificamos se a função retorna 'null' quando um dos parâmetros não é um número.
console.log('Teste 1: A função deve retornar nulo se algum parâmetro não for numérico');
let resultadoTeste1 = soma("2", 2);
if (resultadoTeste1 === null) {
  console.log('Teste 1 passou');
  testesAprovados++;
} else console.log(`Falha no teste 1, esperava 'null' mas recebi ${typeof resultadoTeste1}`);

// Teste 2: Verificamos se a função retorna '0' quando não damos nenhum parâmetro para ela.
console.log('Teste 2: A função deve retornar 0 se nenhum parâmetro for passado');
let resultadoTeste2 = soma();
if (resultadoTeste2 === 0) {
  console.log('Teste 2 passou');
  testesAprovados++;
} else console.log(`Falha no teste 2, esperava '0' mas recebi ${typeof resultadoTeste2}`);

// Teste 3: Verificamos se a função consegue somar '2' e '3' corretamente.
console.log('Teste 3: A função deve ser capaz de fazer a soma corretamente');
let resultadoTeste3 = soma(2, 3);
if (resultadoTeste3 === 5) {
  console.log('Teste 3 passou');
  testesAprovados++;
} else console.log(`Falha no teste 3, esperava '5' mas recebi ${typeof resultadoTeste3}`);

// Teste 4: Verificamos se a função consegue somar mais de dois números.
// Mas nossa função 'soma' só sabe lidar com dois números, então este teste não é válido.
console.log('Teste 4: A função deve ser capaz de fazer a soma corretamente quando passados mais de dois parâmetros');
let resultadoTeste4 = soma(1, 2, 3, 4, 5);
if (resultadoTeste4 === 15) {
  console.log('Teste 4 passou');
  testesAprovados++;
} else console.log(`Falha no teste 4, esperava '15' mas recebi ${typeof resultadoTeste4}`);

// No final, verificamos se todos os testes passaram e mostramos uma mensagem apropriada.
if (testesAprovados === testesTotais) console.log('Todos os testes passaram com sucesso');
else console.log(`${testesAprovados} testes aprovados de um total de ${testesTotais} testes`);