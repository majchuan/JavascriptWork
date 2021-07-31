/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const digitsString = digits.map(element => element.toString()).join('');
    const conversionOfStr = (BigInt(digitsString) + BigInt(1)).toString() ;
    const output=[];
    for(let i=0; i< conversionOfStr.length; i++){
        output.push(conversionOfStr[i]);
    }
    
    return output;
};

const digits =[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
//console.log(plusOne(digits));

/*
*Fastest approach.
*/

const plusOneBestApproach =(digits) => {
    for( i = digits.length -1 ; i>= 0 ; i--){
        if(digits[i]< 9){
            digits[i] += 1;
            return digits;
        }else{
            digits[i] = 0;
        }
    }

    return [1].concat(digits);
}

console.log(plusOneBestApproach(digits));