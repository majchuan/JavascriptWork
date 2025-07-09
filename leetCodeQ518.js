/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const visited = new Array(coins.length);
    for(let i = 0 ; i < visited.length ; i++){
        visited[i] = new Array(amount+1).fill(-1);
    }

    let result = dfs(0, amount, coins , visited);
    return result;
};

const dfs = (index, amount, coins, visited)=>{
    if(amount == 0) return 1;

    if(index == coins.length) return 0 ;

    if(visited[index][amount] != -1) return visited[index][amount];

    if(coins[index] > amount){
        visited[index][amount] = dfs(index+1, amount, coins, visited);
        return visited[index][amount];
    }else{
        visited[index][amount] = dfs(index+1, amount, coins, visited) + dfs(index, amount - coins[index], coins, visited);
        return visited[index][amount];
    }
}
