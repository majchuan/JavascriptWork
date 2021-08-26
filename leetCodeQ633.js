/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    
    let maxJudgeNumber = Math.floor(Math.sqrt(c));
    for(let i = 0 ; i <= maxJudgeNumber ; i++){
        let square = i*i; 
        if(Number.isInteger(Math.sqrt(c-square))){
            if(Math.sqrt(c-square) <= maxJudgeNumber){
                return true ;
            }
        }
    }
    return false;
};

const c= 5;
const c1=1;
const c2=2;
const c3=3;
const c4=4;
const c5=2147483646
console.log(judgeSquareSum(c5));

//console.log(Math.floor(Math.sqrt(c5)))
