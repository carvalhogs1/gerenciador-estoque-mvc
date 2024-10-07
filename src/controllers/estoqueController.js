const produtoModel = require('../models/produtoModel')

// Responsável por renderizar a página de estoque
function renderizarPaginaEstoque(request, response) {
  response.render("estoque");
}

// Responsável por renderizar a página de cadastro de produto
function renderizarPaginaProduto(request, response) {
  const produtos = produtoModel.obterProdutos();
  response.render("criarProduto", {produtos});
}

function adicionarProduto(request, response) {
  console.log(request.body);


  const {titulo, fornecedor, quantidade} = request.body;


  produtoModel.adicionarProdutos(titulo, fornecedor, quantidade);

  response.redirect("/estoque")
}

module.exports = {
  renderizarPaginaEstoque,
  renderizarPaginaProduto,
  adicionarProduto
};
