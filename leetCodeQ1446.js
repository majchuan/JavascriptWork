/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let result = 1 ; 
    let currPower = 1 ;
    
    for(let i = 1 ; i < s.length ; i++){
        if(s[i] != s[i-1]){
            currPower = 1 ;
        }else{
            currPower++;
        }

        result = Math.max(result, currPower);
    }

    return result;
};
