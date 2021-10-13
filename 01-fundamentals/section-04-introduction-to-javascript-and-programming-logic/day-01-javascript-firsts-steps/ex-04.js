// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const numeroTestado = 17;

function estadoValor(valor) {
  let resultado = undefined;
  valor > 0 ? (resultado = "positivo") : (resultado = "negativo");
  valor === 0 ? console.log("Valor é zero") : console.log("Valor " + resultado);
}

estadoValor(numeroTestado);
