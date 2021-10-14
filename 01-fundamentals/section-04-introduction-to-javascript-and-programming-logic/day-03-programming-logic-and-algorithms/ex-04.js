// Depois, faça uma pirâmide com n asteriscos de base:
// n = 5
//   *
//  ***
// *****

let n = 5;
let asterisco = "*";
let espacos = "";

let nMeio = (n + 1) / 2;
let esquerda = nMeio;
let direita = nMeio;

for (let linhaIndex = 0; linhaIndex <= nMeio; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1) {
    colunaIndex > esquerda && colunaIndex < direita
      ? (espacos = espacos + asterisco)
      : (espacos = espacos + " ");
  }
  console.log(espacos);
  espacos = "";
  direita += 1;
  esquerda -= 1;
}

// Esse só com o gabarito :/ minha maneira de fazer não ia de maneira alguma