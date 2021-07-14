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
console.log(plusOne(digits));