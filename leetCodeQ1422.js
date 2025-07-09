/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let result = 0;
    let ones = s.split('').filter(x => x ==1).length;
    let zeros = 0;

    for(let i = 0 ; i < s.length - 1 ;i++){
        if(s[i] == '1'){
            ones--;
        }else{
            zeros++;
        }

        result = Math.max(result, zeros+ones);
    }

    return result;
};