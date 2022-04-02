const chalk = require('chalk');
const fs = require('fs'); //file system

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

//async/await
async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try{
    const texto = await fs.promises.readFile(caminhoDoArquivo,encoding)
    console.log(chalk.green(texto))
  } catch(erro) {
    trataErro(erro);
  }
}

//function pegaArquivo(caminhoDoArquivo) {
//  const encoding = 'utf-8';
//  fs.promises.readFile(caminhoDoArquivo, encoding)
//  .then((texto) => console.log(chalk.green(texto)))
//  .catch((erro) => trataErro(erro))
//}

//function pegaArquivo(caminhoDoArquivo) {
//  const encoding = 'utf-8';
//  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//    if (erro) {
//      trataErro(erro);
//    }
//    console.log(chalk.green(texto));
//  })
//}

pegaArquivo('./arquivos/texto1.md');

