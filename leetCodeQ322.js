/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const visited = {};
    const result = dfs(coins, amount, visited) ;
    return result == Number.MAX_SAFE_INTEGER+1 ? -1 : result;
};

const dfs=(coins ,amount, visited) =>{
    if(visited[amount] != null) return visited[amount];

    if(amount == 0) return 0;

    let minSteps = Number.MAX_SAFE_INTEGER;

    for(let coin of coins){
        if(amount - coin >= 0 ){
            minSteps = Math.min(minSteps, dfs(coins, amount - coin , visited));
        }
    }
    visited[amount] = minSteps + 1;

    return minSteps+1;
}

const coins=[1,2,5], amount = 5;
console.log(coinChange(coins, amount));
