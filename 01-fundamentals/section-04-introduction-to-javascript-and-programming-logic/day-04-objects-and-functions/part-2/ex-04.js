// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function biggestName(...name) {
  let bigName = "";
  for (let i in name) {
    name[i].length > bigName.length ? (bigName = name[i]) : null;
  }
  return bigName;
}

console.log(biggestName(...names));
