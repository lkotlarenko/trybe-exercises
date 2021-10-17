// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let numbers = [2, 3, 6, 7, 10, 1];

function bigerIndex(...num) {
  let bigest = Math.max(...num);
  for (let i in num) {
    num[i] === bigest ? (bigest = i) : null;
  }
  return bigest;
}

console.log(bigerIndex(...numbers));
