/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    const dp = new Array(n+1).fill(Number.MAX_SAFE_INTEGER);

    dp[0] = 0 ;
    for(let i = 0 ; i <=n ; i++){
        let tapStart = Math.max(0, i - ranges[i]);
        let tapEnd = Math.min(n, i + ranges[i]);

        for(let j = tapStart ; j <= tapEnd ; j++){
            dp[tapEnd] = Math.min(dp[tapEnd], dp[j] + 1);
        }
    }

    if(dp[n] == Number.MAX_SAFE_INTEGER){
        return -1;
    }

    return dp[n];
};