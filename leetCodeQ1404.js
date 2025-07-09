/**
 * @param {string} s
 * @return {number}
 */
 var numSteps = function(s) {
    const s_length = s.length;
    let number = BigInt(0);
    let j = 0;
    let step = 0;
    for(let i = s_length-1 ; i >=0 ; i--){
        number += BigInt(Math.pow(2,j) * parseInt(s[i]));
        j++;
    }

    while(number != 1){
        if(number % BigInt(2) == 0){
            number = number / BigInt(2);
        }else{
            number += BigInt(1);
        }
        step++;
    }
    
    return step;
};


/**
 * @param {string} s
 * @return {number}
 */
var numStepsFastApproach = function(s) {
    let result = carry = 0;
 
    for (let index = s.length - 1; index > 0; index--) {
       const str = s[index];
 
       if (str === '0') {
          result += carry ? 2 : 1;
       } else {
          result += carry ? 1 : 2;
          carry = 1;
       }
 
    }
    return result + carry; 
 };

const s = "1101";
console.log(numSteps(s));