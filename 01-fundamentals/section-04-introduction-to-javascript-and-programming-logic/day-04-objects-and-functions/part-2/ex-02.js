// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let numbers = [2, 3, 6, 7, 10, 1];

function biggerIndex(...num) {
  let biggest = Math.max(...num);
  for (let i in num) {
    num[i] === biggest ? (biggest = i) : null;
  }
  return biggest;
}

console.log(biggerIndex(...numbers));
