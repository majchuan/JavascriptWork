/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0 ;
    let reminder = 0 ;
    let y = Math.abs(x);
    let maxValue = Math.pow(2,31) -1;
    while(y != 0){
        reminder = y % 10 ;
        if(maxValue / 10 < reversed ) return 0 ;
        reversed = reversed * 10 + reminder ;
        y = Math.floor(y/10);
    }

    return x > 0 ? reversed : -reversed;
};