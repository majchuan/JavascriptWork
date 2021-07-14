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

console.log(addBinary(a,b));