/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    const memo = new Array(n+1).fill().map(() => new Array(Math.floor(n/2)+1));
    if(n == 1) return 0 ;
    return dfs(1, 1, memo, n) + 1;
};

const dfs = (currLen, pasteLen , memo, n) => {
    if(currLen == n){
        return 0;
    }
    if(currLen > n){
        return Number.MAX_SAFE_INTEGER-1;
    }
    
    if(memo[currLen][pasteLen] != null){
        return memo[currLen][pasteLen];
    }

    //paste.
    let copySteps = 1 + dfs(currLen + pasteLen, pasteLen, memo, n); 
    //copy, paste.
    let pasteSteps = 2 + dfs(currLen * 2, currLen, memo , n );
    
    let minSteps = Math.min(copySteps, pasteSteps);

    memo[currLen][pasteLen] = minSteps;

    return minSteps;
}
