/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const visited =[];
    for(let i = 0 ; i< grid.length; i++){
        visited[i] = new Array(grid[0].length).fill(false);
    }


    let numOfIslands = 0 ;
    for(let i = 0 ; i < grid.length ; i++){
        for(let j = 0 ; j < grid[0].length ; j++){
            if(grid[i][j] == 0 && visited[i][j]== false){
                if(dfs(grid, i, j, visited)){
                    numOfIslands++;
                }
            }
        }
    }

    return numOfIslands;
};

const dfs=(grid, row, column,visited)=>{
    if(row < 0 || row > grid.length -1 || column < 0 || column > grid[0].length-1){
        return false;
    }
    

    if(grid[row][column] == 1 || visited[row][column]){
        return true ;
    }

    visited[row][column] = true;

    let d1 = dfs(grid, row+1, column, visited);
    let d2 = dfs(grid, row, column+1, visited);
    let d3 = dfs(grid, row-1, column, visited);
    let d4 = dfs(grid, row, column-1, visited);

    if(d1 && d2 && d3 && d4){
        return true;
    }else{
        return false;
    }
}
const grid =[
    [0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1],
    [0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1],
    [1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0],
    [0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0],
    [1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1],
    [1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0],
    [1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0],
    [1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1],
    [1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0],
    [1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1],
    [0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0],
    [1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1]
];

console.log(closedIsland(grid));