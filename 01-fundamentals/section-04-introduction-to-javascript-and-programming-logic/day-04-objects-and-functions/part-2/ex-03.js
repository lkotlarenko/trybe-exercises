// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let numbers = [2, 4, 6, 7, 10, 0, -3];

function smallerIndex(...num) {
  let smallest = Math.min(...num);
  for (let i in num) {
    num[i] === smallest ? (smallest = i) : null;
  }
  return smallest;
}

console.log(smallerIndex(...numbers));