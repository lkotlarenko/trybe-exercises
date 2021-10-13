// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const a = 2;
const b = 4;
const c = 5;

let ehImpar = false;
a % 2 !== 0 ? ehImpar = true : null;
b % 2 !== 0 ? ehImpar = true : null;
c % 2 !== 0 ? ehImpar = true : null;
console.log(ehImpar)