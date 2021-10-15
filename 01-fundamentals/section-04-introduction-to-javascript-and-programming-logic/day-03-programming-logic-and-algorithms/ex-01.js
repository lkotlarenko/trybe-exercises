// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

const n = 5
let quadrado = ""

while (quadrado.length != n) {
    quadrado = quadrado + "*"
}
for (let i = 1; i <= n; i += 1) {
    console.log(quadrado)
}