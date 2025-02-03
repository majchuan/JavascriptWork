/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dir = [[0,1],[1,0],[-1,0],[0,-1]];
    const visited = new Set();
    let counter = 0 ;

    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            if(grid[i][j] == 1 && dfs(grid, i, j)){
                counter++;
            }
        }
    }

    return counter;
};

const dfs = (grid, row, column)=>{
    
    for(let i = 0 ; i < grid.length ; i++){
        if(grid[i][column] == 1 && i != row) return true;
    }

    for(let i = 0 ; i < grid[row].length ; i++){
        if(grid[row][i] == 1 && i != column) return true;
    }

    return false;
}
