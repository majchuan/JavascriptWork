/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
    const uglyNumbers=[1];
    let pointerTwo = 0;
    let pointerThree = 0;
    let pointerFive = 0 ;
    while(uglyNumbers.length < n){
        let uglyNumber2 = uglyNumbers[pointerTwo] * 2 ;
        let uglyNumber3 = uglyNumbers[pointerThree] * 3 ;
        let uglyNumber5 = uglyNumbers[pointerFive] * 5;
        
        let minUglyNumber = Math.min(uglyNumber2,uglyNumber3, uglyNumber5);
        uglyNumbers.push(minUglyNumber);
        if(minUglyNumber == uglyNumber2){
            pointerTwo++;
        }
        if(minUglyNumber == uglyNumber3){
            pointerThree++;
        }
        if(minUglyNumber == uglyNumber5){
            pointerFive++;
        }
    }
    
    return uglyNumbers[n-1];
    
};

const n = 1407;
console.log(nthUglyNumber(n));

const ugly = new Set();
ugly.size