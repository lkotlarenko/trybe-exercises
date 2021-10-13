// https://youtu.be/Mus_vwhTCq0 Dicas maravilhosas :D

let angulos = [60, 40, 60];
const total = angulos.reduce((acc, cur) => acc + cur);
const invalido = angulos.filter((v) => v <= 0);
total === 180 ? console.log(true) : console.log(false);
invalido.length === 0 ? null : console.log("Erro, " + invalido + " invalido(s)");
