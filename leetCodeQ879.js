/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
    const memo = new Array(102);
    for(let i = 0 ; i < 102 ; i++){
        memo[i] = new Array(102);
        for(let j = 0 ; j< 102; j++){
            memo[i][j] = new Array(102).fill(-1);
        }
    }

    //console.log(memo);

    return dfs(0,0,0,n,minProfit, group, profit,memo);

};

const dfs=(pos, count, profit, n, minProfit, group, profits, memo) =>{
    if(pos == group.length){
        return profit >= minProfit ? 1 : 0;
    }

    if(memo[pos][count][profit] != -1){
        return memo[pos][count][profit];
    }

    let totalNum = dfs(pos+1, count, profit, n, minProfit, group, profits, memo);

    if(count + group[pos] <= n){
        totalNum += dfs(pos +1 , count +group[pos], Math.min(minProfit, profit + profits[pos]),n, minProfit, group, profits, memo );
    }

    return memo[pos][count][profit] = totalNum % (10**9 +7);
}