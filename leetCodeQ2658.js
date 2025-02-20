/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Set();
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    let maxFishSum = 0; 

    for(let i = 0 ; i < m ; i++){
        for(let j = 0; j < n ; j++){
            if(grid[i][j] > 0){
                maxFishSum = Math.max(maxFishSum, dfs(grid, visited, i, j, dir));
            }
        }
    }

    return maxFishSum;
};

const dfs=(grid,visited, i, j, dir) =>{
    let totalSum = 0 ;
 
    if( i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == 0){
        return 0;
    }

    const key = i + '|' + j ;
    if(visited.has(key)){
        return 0 ;
    }else{
        visited.add(key);
    }

    totalSum += grid[i][j];
    for(let index = 0 ; index < 4 ; index++){
        totalSum += dfs(grid, visited, i+dir[index][0] , j+dir[index][1], dir);
    }

    return totalSum ; 
}
