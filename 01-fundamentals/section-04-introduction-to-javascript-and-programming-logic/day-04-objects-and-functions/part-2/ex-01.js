function verificaPalindrome(palavra) {
  let palindrome = false;
  let i = -1;
  for (let i2 = palavra.length - 1; i2 != 0; i2 -= 1) {
    i += 1;
    palavra[i] === palavra[i2] ? (palindrome = true) : (palindrome = false);
    console.log(`${palavra[i]} e ${palavra[i2]}: ${palindrome}`);
  }
  return palindrome;
}
verificaPalindrome("arara");
