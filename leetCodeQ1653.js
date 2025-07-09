/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletionsStack = function(s) {
    const n = s.length;
    const stack = [];
    let deleteCount = 0 ;

    for(let i = 0 ; i < s.length ; i++){
        if(stack.length > 0 && stack[stack.length-1] == 'b' && s[i] =='a'){
            stack.pop();
            deleteCount++;
        }else{
            stack.push(s[i]);
        }
    }

    return deleteCount;
};

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletionsDP = function(s) {
    const n = s.length;
    const dp = new Array(s.length+1).fill(0);
    let bCount = 0;

    for(let i = 0 ; i < n ; i++){
        if(s[i] == 'b'){
            dp[i+1] = dp[i];
            bCount++;
        }else{
            dp[i+1] = Math.min(dp[i]+1 , bCount);
        }
    }
    return dp[n];
};