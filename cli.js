const chalk = require('chalk');
const pegaArquivo = require('./index.js')

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = pegaArquivo(caminhoDeArquivo[2]);
    console.log(chalk.yellow('lista de links'), await resultado)
}

processaTexto(caminho);