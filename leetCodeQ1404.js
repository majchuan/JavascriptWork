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

const s = "1101";
console.log(numSteps(s));