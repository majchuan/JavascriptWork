/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(!grid) return 0;
    
    let row = grid.length;
    let column = grid[0].length;
    
    let res = [0];
    for(let i = 0; i < row; i++){
        for(let j = 0; j < column; j++){
            console.log(res);
            if(i === 0){
                console.log(j,res[j], i ,grid[i][j] , res[j] + grid[i][j] );
                res.push(res[j] + grid[i][j]);
            } else if(j === 0){
               
                res[j + 1] += grid[i][j];
            } else {
                res[j + 1] = Math.min(res[j], res[j + 1]) + grid[i][j];
            }
        }
    }
    console.log(res);
    return res[column];
};

var minPathSumBackTracking = function(grid) {
    const pathSums = [];
    directions = [-1,1] ; // -1 move down, 1 move right;
    dfsPath(grid,directions,pathSums,0,0,0);
    return pathSums[0];
};

const dfsPath = (grid,directions,pathSums, sum , m, n) =>{
    const start_x = m;
    const start_y = n;
    
    if(start_x == grid.length -1 && start_y == grid[0].length-1){
        sum+=grid[start_x][start_y];
        if(pathSums.length == 0){
            pathSums.push(sum);
        }else{
            const minPathSum = Math.min(sum, pathSums[0]);
            pathSums[0] = minPathSum;
        }
        return
    }
    
    if(start_x > grid.length-1 || start_y > grid[0].length -1){
        return ;
    }
    
    for(let i = 0 ; i < directions.length; i++){
        if(directions[i] == -1){
            dfsPath(grid,directions,pathSums, sum + grid[m][n], m+1, n);
        }
        
        if(directions[i] == 1){
            dfsPath(grid,directions,pathSums, sum + grid[m][n], m, n+1);
        }
    }
}

const grid = [[1,3,1],[1,5,1],[4,2,1]];
const grid1= [[1,2,3],[4,5,6]];
const grid2=   [[7,1,3,5,8,9,9,2,1,9,0,8,3,1,6,6,9,5],
                [9,5,9,4,0,4,8,8,9,5,7,3,6,6,6,9,1,6],
                [8,2,9,1,3,1,9,7,2,5,3,1,2,4,8,2,8,8],
                [6,7,9,8,4,8,3,0,4,0,9,6,6,0,0,5,1,4],
                [7,1,3,1,8,8,3,1,2,1,5,0,2,1,9,1,1,4],
                [9,5,4,3,5,6,1,3,6,4,9,7,0,8,0,3,9,9],
                [1,4,2,5,8,7,7,0,0,7,1,2,1,2,7,7,7,4],
                [3,9,7,9,5,8,9,5,6,9,8,8,0,1,4,2,8,2],
                [1,5,2,2,2,5,6,3,9,3,1,7,9,6,8,6,8,3],
                [5,7,8,3,8,8,3,9,9,8,1,9,2,5,4,7,7,7],
                [2,3,2,4,8,5,1,7,2,9,5,2,4,2,9,2,8,7],
                [0,1,6,1,1,0,0,6,5,4,3,4,3,7,9,6,1,9]];
console.log(minPathSum(grid));


