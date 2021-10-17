// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palavra) {
  let palindrome = true;
  let i = -1;
  for (let i2 = palavra.length - 1; i2 != 0; i2 -= 1) {
    i += 1;
    palavra[i] === palavra[i2] ? null : (palindrome = false);
    console.log(`${i}-${palavra[i]} vs ${i2}-${palavra[i2]} -> ${palindrome}`);
  }
  return palindrome;
}
console.log(`é palindrome? -> ${verificaPalindrome("alabula")}`);
