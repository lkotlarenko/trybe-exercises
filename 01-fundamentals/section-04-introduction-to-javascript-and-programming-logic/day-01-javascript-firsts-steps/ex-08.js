// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

const a = 3;
const b = 5;
const c = 7;

let ehPar = false;
a % 2 === 0 ? ehPar = true : null;
b % 2 === 0 ? ehPar = true : null;
c % 2 === 0 ? ehPar = true : null;
console.log(ehPar)
