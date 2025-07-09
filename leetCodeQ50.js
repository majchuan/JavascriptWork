/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    let result = 0;
    let absn = Math.abs(n);
    if(n < 0 ){
        return 1/myPow(x,-n);
    }   
    if(absn == 0){
        return 1;
    }

    if(absn == 1){
        return x;
    }
    if(absn % 2 == 0) {
        result = myPow(x, absn/2);
        result= result * result;
    }else{
        result = myPow(x, (absn-1)/2);
        result= result * result * x;
    }

    return result;
};



const x =8.95371, n=-1;
const x1 = 2 , n1 =10 ;
console.log(myPow(x1,n1));