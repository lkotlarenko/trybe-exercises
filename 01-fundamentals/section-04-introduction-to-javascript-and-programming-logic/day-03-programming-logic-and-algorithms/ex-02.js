// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

const n = 5
let drawn = ""

while (drawn.length != n) {
    drawn = drawn + "*"
    console.log(drawn)
}