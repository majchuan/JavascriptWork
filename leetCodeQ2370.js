/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    const n = s.length;
    const dp = new Array(n);
    for(let i = 0 ; i < n ; i++){
        dp[i] = new Array(26).fill(-1);
    }

    let result = 0;
    for(let c = 0 ; c < 26 ; c++){
        result = Math.max(result, dfs(n-1, c , dp ,s ,k ) );
    }

    return result;
};

const dfs=(i , c , dp , s ,k)=>{
    if(dp[i][c] != -1) return dp[i][c];

    dp[i][c] = 0; // state is not visited yet
    let match = c == (s.charCodeAt(i) - 97);
    if(match){
        dp[i][c] = 1 ;
    }

    if(i > 0){
        dp[i][c] = dfs(i-1, c ,dp ,s ,k);
        if(match){
            for(let j = 0 ; j < 26 ; j++){
                if(Math.abs(c -j) <= k){
                    dp[i][c] = Math.max(dp[i][c] , dfs(i-1, j, dp, s, k) + 1);
                }
            }
        }
    }

    return dp[i][c];
}