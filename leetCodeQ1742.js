/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 var countBalls = function(lowLimit, highLimit) {
    const hash_box ={};
    for(let i = lowLimit ; i  <= highLimit; i++){
        let sum = sumOfLimit(i);
        hash_box[sum] ? hash_box[sum]++ : hash_box[sum]=1;
    }
    
    return Object.values(hash_box).sort((x,y) => y-x)[0];
};

const sumOfLimit =(num) =>{
    const numStr = num.toString();
    const nums = numStr.split("");
    let sum = nums.reduce((x,y) => parseInt(x)+parseInt(y),0);
    
    return sum;
}

const lowLimit = 1, highLimit = 10;
console.log(countBalls(lowLimit,highLimit));