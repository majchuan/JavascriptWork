/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const visited = new Map();
    return Math.min(dfs(cost, 0, visited) , dfs(cost ,1, visited));
};

const dfs=(cost, stepIndex, visited) =>{
    if(stepIndex > cost.length -1){
        return 0;
    }

    if(visited.has(stepIndex)) return visited.get(stepIndex);

    const miniCost = Math.min(cost[stepIndex] + dfs(cost, stepIndex+1, visited) , cost[stepIndex] + dfs(cost, stepIndex+2, visited) );

    visited.set(stepIndex, miniCost);
    return miniCost;
}