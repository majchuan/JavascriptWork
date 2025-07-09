/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Set();
    const directions = [[-2, 1],[-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];
    return dfs(grid,m,n,0,0,visited, directions, 0);
};

const dfs=(grid,m,n,i,j,visited, directions ,cell) =>{

    const key = i.toString() + "|" + j.toString();
    if(visited.has(key)) return false;

    visited.add(key);

    if(visited.size == m*n) return true;

    for(let d of directions){
        let r = d[0];
        let c = d[1];
        let newRow = i + r;
        let newCol = j + c;

        if(newRow >= m || newRow <0 || newCol >= n || newCol < 0){
            continue ;
        }

        if(grid[newRow][newCol] == cell+1 ){
            if(dfs(grid,m,n,newRow, newCol, visited, directions, cell+1)){
                return true;
            }
        }
    }

    return false;
  
}

const grid = [[0,13,1,7,20],[3,8,19,12,15],[18,2,14,21,6],[9,4,23,16,11],[24,17,10,5,22]];
console.log(checkValidGrid(grid));