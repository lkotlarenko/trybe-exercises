// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto 
// de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custoProduto = 1;
const vendaProduto = 3;

const totalImposto = custoProduto * 1.2;
const lucro = (vendaProduto - totalImposto) * 1000;
custoProduto >= 0 && vendaProduto >= 0
  ? console.log(lucro)
  : console.log("Error, os valores não podem ser negativos");
