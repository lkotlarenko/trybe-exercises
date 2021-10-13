// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
total = numbers.reduce((acc, cur) => acc + cur);

// ou:
// for (let i = 0; i != numbers.length; i += 1) {
//   total = total + numbers[i];
// }

console.log("Total: ", total);
