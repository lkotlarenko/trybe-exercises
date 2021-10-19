// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let numbers = [2, 3, 2, 5, 8, 2, 3]

function mostRepeated(...num) {
    let repeated = {};
    for (let i in num){
        let repeated = 0;
        for (let i2 in num) {
            let 
            num[i] === num[i2] ? repeated.i = i2
        }
    }
    // let biggest = Math.max(...num);
    //  
    // return biggest;
  }
  
  console.log(mostRepeated(...numbers));
