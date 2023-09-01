/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return Math.log2(n) % 1 == 0 ;
};

/*
*No built in function.
*/

var isPowerOfTwoWithOutBuildInFunction = function(n) {
    if(n <= 0) return false;

    while(n != 1){
        if( n % 2 != 0 ) return false;

        n = n / 2 ; 
    }

    return true;
};