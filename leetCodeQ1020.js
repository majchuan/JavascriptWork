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