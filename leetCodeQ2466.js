/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const dp = new Array(high+1).fill(-1);
    let mod = 10**9+7;
    let result = 0;
    dp[0] = 1;
    for(let i = low ; i <= high; i++){
        result +=dfs(dp, i, zero, one, mod);
    }
    //console.log(dp);
    return result % mod;
};

const dfs=(dp, i, zero, one, mod)=>{
    if(dp[i] != -1){
        return dp[i];
    }

    let count = 0;
    if( i >= zero){
        count += dfs(dp, i - zero , zero, one, mod);
    }

    if(i >= one){
        count += dfs(dp, i - one, zero,one, mod);
    }

    dp[i] = count % mod;

    return dp[i];
}