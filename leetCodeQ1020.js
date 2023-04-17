/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
*This approach is to check boundary of the matrix from first row, last row, first column, and last column, use dfs to find all connected island which they can reach to
*matrix boundary, then set each reachable connected island to -1. 
*after this dfs search from the boundary matrix. then just do another matrix loop to find all visited island, which just identify the cell value is 1 or not.
*/
var numEnclavesFastApproach = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    // DFS to mark all boundary connected lands as visited
    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 1) {
            return;
        }
        grid[i][j] = -1;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    
    // Mark all boundary connected lands as visited
    for (let i = 0; i < m; i++) {
        dfs(i, 0);
        dfs(i, n - 1);
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j);
        dfs(m - 1, j);
    }
    
    // Count the number of unvisited lands
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                count++;
            }
        }
    }
    return count;
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const visited = new Set();
    let numberOfLandCells = 0 ;
    for(let i = 0 ; i < grid.length ; i++){
        for(let j = 0 ; j < grid[0].length ; j++){
            const paths = [];
            if(grid[i][j] == 1 && visited.has(i.toString()+"|"+j.toString()) == false){
                if(dfs(i,j,grid, visited,paths)){
                    numberOfLandCells += paths.length;
                }
            }
        }
    }

    return numberOfLandCells;
};

const dfs=(row, column, grid, visited, paths) =>{
    if(row < 0 || column < 0 || row >= grid.length || column >= grid[0].length){
        return false;
    }

    if(grid[row][column] == 0 || visited.has(row.toString() +"|"+column.toString())){
        return true;
    }

    visited.add(row.toString() +"|"+column.toString());
    paths.push(1);

    let top = dfs(row-1, column, grid, visited, paths);
    let left = dfs(row, column-1, grid, visited, paths);
    let bottom = dfs(row+1, column, grid, visited, paths);
    let right = dfs(row, column+1, grid, visited, paths);

    if(top && left && bottom && right){
        return true;
    }else{
        return false;
    }
}