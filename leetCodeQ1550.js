/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let threeOddCount = 0 ;
    for(let num of arr){
        if(num % 2 != 0){
            threeOddCount++;
        }else{
            threeOddCount= 0;
        }

        if(threeOddCount == 3) return true;
    }

    return false;
};