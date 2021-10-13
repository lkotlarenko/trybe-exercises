// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const total = numbers.reduce((acc, cur) => acc + cur);
let mediaAritmetica = total / numbers.length;
console.log(mediaAritmetica);
mediaAritmetica < 20 ? console.log("valor menor que 20") : console.log("valor maior que 20");