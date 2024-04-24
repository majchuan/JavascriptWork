/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const memo={};
    return dfs(n, memo);
};

const dfs=(n,memo)=>{
    if(n==0) return 0 ;
    if(n==1 || n==2) return 1;

    if(memo[n] != null) return memo[n];

    memo[n] = dfs(n-3, memo) + dfs(n-2, memo) + dfs(n-1 ,memo);
    return memo[n];
}