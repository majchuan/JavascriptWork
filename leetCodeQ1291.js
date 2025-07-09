/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const result = [];
    const lowLength = low.toString().length;
    const highLength = high.toString().length;
    const sample ="123456789";

    for(let i = lowLength ; i <= highLength ; i++){
        for(let j = 0 ; j < 10 - i; j++){
            let num = parseInt(sample.slice(j, j+i));
            if(low <= num && num <= high){
                result.push(num);
            }
        }
    }

    return result;
};

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigitsSlowApproach = function(low, high) {
    const result = [];
    for(let i = 1 ; i <= 9 ; i++){
        let num = i ;
        let nextDigits = i +1 ;
        while(nextDigits <= 9){
            num = num * 10 + nextDigits;
            if(low <= num && num <= high){
                result.push(num);
            }
            nextDigits++;
        }
    }

    return result.sort((a,b) => a - b);
};