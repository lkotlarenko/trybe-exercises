// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um
// triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// https://youtu.be/Mus_vwhTCq0 Dicas maravilhosas :D

let angulos = [60, 40, 60];
const total = angulos.reduce((acc, cur) => acc + cur);
const invalido = angulos.filter((v) => v <= 0);
total === 180 ? console.log(true) : console.log(false);
invalido.length === 0 ? null : console.log("Erro, " + invalido + " invalido(s)");
