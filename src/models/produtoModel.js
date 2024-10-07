// Importando a conexão com o banco de dados
const pool = require("../config/banco-de-dados");

function adicionarProdutos(produto, fornecedor, quantidade){
    pool
    .query(
      `INSERT INTO produtos(produto, fornecedor, quantidade, criadoEm) VALUES ('${produto}', '${fornecedor}', '${quantidade}', NOW())`
    )
    .then(() => {
      console.log("DEU CERTO");
    })
    .catch((error) => {
      console.error("ERRO AO INSERIR DADOS", error);
    });


   
}

function obterProdutos(){
    return [];
}

module.exports = {
    adicionarProdutos,
    obterProdutos
}