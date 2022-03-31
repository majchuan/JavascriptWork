/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let i=a.length-1;
    let j=b.length-1;
    let carriedBit = 0;
    let bit1 = 0;
    let bit2 = 0;
    let result = [];
    let bitSum = 0 ;
    while(i>= 0 || j>= 0){
        bit1= 0 ;
        bit2= 0;
        if(i>= 0){
            bit1 = parseInt(a[i]);
            i--;
        }
        if(j>=0){
            bit2 =parseInt(b[j]);
            j--;
        }
        
        if(bit1 + bit2 > 1){
            bitSum = carriedBit == 1 ?  1 : 0 ;
            carriedBit = 1 ; 
            result.unshift(bitSum);
        }else{
            if(carriedBit == 1){
                if(bit1+bit2+carriedBit > 1){
                    bitSum = 0;
                    carriedBit = 1 ;
                }else{
                    bitSum = 1;
                    carriedBit = 0 ;
                }
            }else{
                bitSum = bit1+bit2;
                carriedBit = 0 ;
            }
            result.unshift(bitSum);
        }
        
    }
    
    if(carriedBit != 0) {
        result.unshift(carriedBit);
    }
    
    return result.join('');
};


const a ="1010";
const b ="1011";

//console.log(addBinary(a,b));

/*
*Faster approach
*/
var addBinaryFastApproach = function(a, b) {
    const A = a.split('')
    const B = b.split('')
    let up = 0
    let ans = ''
    while (A.length > 0 || B.length > 0) {
        const x = A.length > 0 ? +A.pop() : 0
        const y = B.length > 0 ? +B.pop() : 0
        ans = (x + y + up) % 2 + ans
        up = (x + y + up) > 1 ? 1 : 0
    }
    if (up) ans = up + ans
    return ans
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinaryFastest = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
};

const a1="1010" ,b1="0101";
console.log(addBinaryFastApproach(a1,b1));