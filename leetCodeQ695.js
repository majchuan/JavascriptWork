/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0 ;
    for(let i = 0 ; i < grid.length; i++){
        for(let j = 0 ; j < grid[0].length ; j++){
            if(grid[i][j] == 1){
                maxArea = Math.max(maxArea, dfs(grid,i,j));
            }
        }
    }

    return maxArea;
};

const dfs=(grid, i, j) =>{
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == 0){
        return 0;
    }

    if(grid[i][j] == -1){
        return 0;
    }

    grid[i][j] = -1;
    
    let currArea = 1 ;
    let up = dfs(grid, i-1 ,j );
    let down = dfs(grid, i+1 ,j);
    let left = dfs(grid, i , j-1);
    let right = dfs(grid, i, j+1);

    currArea = currArea + up + down + left +right;

    return currArea;
}
