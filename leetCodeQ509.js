/**
 * @param {number} n
 * @return {number}
 */
var fibMemo = function(n) {
    const memo ={};
    return dfs(n, memo);
};

const dfsMemo=(n,memo)=>{
    if(n == 0) return 0 ;
    if(n == 1) return 1;
    if(memo[n] != null) return memo[n];
    memo[n] = dfs(n-1,memo) + dfs(n-2, memo);
    return memo[n];
}

/**
 * @param {number} n
 * @return {number}
 * Top to bottom DP, and dfs.
 */
var fib = function(n) {
    const fibonacciSeq = [0,1];
    for(let i = 2 ; i <= n ; i++){
        fibonacciSeq[i] = fibonacciSeq[i-1] + fibonacciSeq[i-2];
    }

    return fibonacciSeq[n];
};