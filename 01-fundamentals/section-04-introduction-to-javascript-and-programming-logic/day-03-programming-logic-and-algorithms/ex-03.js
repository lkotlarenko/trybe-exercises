// Agora inverta o lado do triângulo. Por exemplo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****

const n = 5;
let espacos = "";
let cheio = "";
let asteriscos = "";

for (let i = 0; i < n; i += 1) {
  cheio = cheio + " ";
}

for (let i = 1; i < n; i += 1) {
  espacos = cheio.substring(0, cheio.length - i);
  asteriscos = asteriscos + "*";
  console.log(espacos + asteriscos);
}
asteriscos = asteriscos + "*";
console.log(asteriscos);

// Mds que trabalheira foi esse ;-;