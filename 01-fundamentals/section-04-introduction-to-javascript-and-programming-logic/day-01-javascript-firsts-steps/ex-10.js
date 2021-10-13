const custoProduto = 1;
const vendaProduto = 3;

const totalImposto = custoProduto * 1.2;
const lucro = (vendaProduto - totalImposto) * 1000;
custoProduto >= 0 && vendaProduto >= 0
  ? console.log(lucro)
  : console.log("Error, os valores não podem ser negativos");
