const commander = require("commander");

const program = new commander.Command();

// comando, descrição, valor default
program
  .option("-d", "Variável para debug", false)
  .option("-p <porta>", "Porta do servidor", "8080")
  .option("-m, --mode <mode>", "Modo de trabalho", "produção")
  .requiredOption("-u <user>", "Usuário utilizando o aplicativo", "Nenhum usuário declarado") // no caso do requiredOption, o 3 argumento é uma mensagem de erro se não for especificado o valor
  .option("-l, --letters [letters...]", "Letras específicas");

// Adicione argumentos extras
program.argument("[args...]", "Argumentos adicionais");

// Parse da CLI
program.parse(process.argv);

console.log("Opções:", program.opts());
console.log("Argumentos adicionais:", program.args);

// Se não foi passado --letters, use os argumentos adicionais para popular
if (!program.opts().letters && program.args.length > 0) {
  program.opts().letters = program.args;
}