/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let result1 = 0 ;
    let result0 = 0 ;
    for(let i = 0 ; i < s.length ; i++){
        if(i % 2 == 0){
            if(s[i] == '0'){
                result1++;
            }else{
                result0++;
            }
        }else{
            if(s[i] == '1'){
                result1++;
            }else{
                result0++;
            }
        }
    }

    return Math.min(result0 , result1);
};