const s1 = 20;
const s2 = 12;
const s3 = 36;

function maiorNumero(n1, n2, n3) {
  let highNum = 0;
  n1 >= n2 ? (highNum = n1) : (highNum = n2);
  highNum >= n3 ? (highNum = highNum) : (highNum = n3);
  console.log(highNum);
  return highNum;
}

maiorNumero(s1, s2, s3);
