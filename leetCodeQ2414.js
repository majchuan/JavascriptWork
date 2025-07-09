/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
    //console.log("a".charCodeAt(0) , "b".charCodeAt(0));
    if(s.length == 1) return 1;

    let left = 0 ; right =  1;
    let maxLength = 1 ; 
    while(right < s.length){
        if(s[right].charCodeAt(0) - s[right-1].charCodeAt(0) == 1){
            maxLength = Math.max(maxLength, right - left + 1 );
        }else{
            left = right;
        }
        right++;
    }

    return maxLength;
};