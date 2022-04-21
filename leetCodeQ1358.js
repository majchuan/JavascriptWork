/**
 * @param {string} s
 * @return {number}
 */
 var numberOfSubstrings = function(s) {
    let a = -1;
    let b = -1;
    let c = -1;
    let i = 0;
    let ans = 0
    
    while (i < s.length) {
        if (s[i] === 'a') a = i;
        else if (s[i] === 'b') b = i;
        else c = i;
        if (a !== -1 || b !== -1 || c !== -1) {
            ans += Math.min(a,b,c) + 1
        }
        i++;
    }
    
    return ans
};
/*
*Sliding windows
*/
 var numberOfSubstringsSlowApproach = function(s) {
    let left = 0;
    let right = 2;
    let totalNumber = 0 ;
    while(left < s.length){
        let subStr = s.slice(left, right+1);
        if(checkSubString(subStr)){
            totalNumber += s.length - right ;
            if(right < s.length-1 && right - left == 2 ) right++;
            left++;
        }else{
            if(right < s.length-1){
                right++;
            }else{
                break;
            }
        }
        if(subStr.length < 3) break;
    }
    
    return totalNumber ; 
    
};

var checkSubString= (s) =>{
    return s.includes("a") && s.includes("b") && s.includes("c");
}