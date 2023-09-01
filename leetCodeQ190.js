/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let strN = n.toString(2).split('').reverse().join('') ;
    let length = strN.length;
    if( strN.length <= 32 ){
        for(let i = 0 ; i < (32 - length); i++){
            strN = strN + "0";
        }
    }

   //console.log(strN.length);

    return parseInt(strN,2);
};