const numeroTestado = 17;

function estadoValor(valor) {
  let resultado = undefined;
  valor > 0 ? (resultado = "positivo") : (resultado = "negativo");
  valor === 0 ? console.log("Valor é zero") : console.log("Valor " + resultado);
}

estadoValor(numeroTestado);
