/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    const grid = new Array(m).fill().map(()=> new Array(n).fill(0));
    for(let guard of guards){
        grid[guard[0]][guard[1]] = 1;
    }

    for(let wall of walls){
        grid[wall[0]][wall[1]] = 2 ;
    }

    for(let guard of guards){
        dfs(guard[0]-1, guard[1], grid, 1);
        dfs(guard[0]+1, guard[1], grid, 2);
        dfs(guard[0], guard[1]-1, grid, 3);
        dfs(guard[0], guard[1]+1, grid, 4);
    }
    console.log(grid);
    let emptyCell = 0 ;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0 ; j < grid[0].length; j++){
            if(grid[i][j]==0){
                emptyCell++;
            }
        }
    }

    return emptyCell;
};

const dfs=(row, col, grid , direction) =>{
    if(row < 0 || 
    row >= grid.length || 
    col < 0 || 
    col >= grid[0].length || 
    grid[row][col] == 1 || 
    grid[row][col] == 2){
        return;
    }
    
    grid[row][col]= 3;

    if(direction == 1){
        dfs(row - 1, col, grid, 1);
    }

    if(direction == 2){
        dfs(row + 1, col, grid, 2);
    }

    if(direction == 3){
        dfs(row, col - 1 , grid, 3);
    }

    if(direction == 4){
        dfs(row, col + 1, grid, 4);
    }
}
