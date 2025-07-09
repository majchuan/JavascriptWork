/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
*DFS, you can create a visited array , or simple just set visited grid[i][j] = '-1' or other value like 'a'
*/
var numIslands = function(grid) {
    let counter = 0;
     const m = grid.length;
     const n = grid[0].length 
    let visited = Array.from(new Array(m),() => new Array(n).fill(0));
     
    for(let i = 0 ; i < m; i++){
        for(let j = 0 ; j < n; j++){
            if(grid[i][j] == 1 && visited[i][j] == 0){
                dfs(grid, i,j , visited);
                counter++;
            }
        }
    }

    return counter ;
    
};

const dfs =(grid, m, n, visited) =>{
    
    if (m < 0 || n < 0 || m === grid.length || n === grid[0].length) return;
    
    if (grid[m][n] === "0") return;
    
    if(visited[m][n] == 1) return; 
    
    visited[m][n] = 1 ; 
    
    // four direction 
    dfs(grid,m-1, n, visited);
    dfs(grid,m+1, n, visited);
    dfs(grid,m, n-1, visited);
    dfs(grid,m, n+1, visited);
    
}

/*
*BFS
*/
const numIslandBFS=(grid)=>{
    const queue=[];
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from(new Array(m),()=> new Array(n).fill(0));
    let counter = 0;
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            if(grid[i][j] == 1 && visited[i][j] == 0){
                queue.push([i,j]);
                while(queue.length > 0){
                    const currLength = queue.length;
                    for(let i = 0 ; i <  currLength ; i++){
                        const [currRow,currCol] =queue.shift();
                        if(visited[currRow][currCol] == 0){
                            visited[currRow][currCol] = 1 ;
                            if(currRow - 1 >= 0 && grid[currRow - 1][currCol] == 1 && visited[currRow-1][currCol] == 0){
                                queue.push([currRow -1 ,currCol]);
                            }
                            if(currRow + 1 < m && grid[currRow + 1][currCol] == 1 && visited[currRow+1][currCol] == 0){
                                queue.push([currRow +1 ,currCol]);
                            }
                            if(currCol - 1 >= 0 && grid[currRow][currCol-1] == 1 && visited[currRow][currCol-1] == 0){
                                queue.push([currRow ,currCol-1]);
                            }
                            if(currCol + 1 < n && grid[currRow][currCol+1] == 1 && visited[currRow][currCol+1] == 0){
                                queue.push([currRow ,currCol+1]);
                            }
                        }
                    }
                    
                }
                console.log(visited);
                counter++;
            }
        }
    }

    return counter;
}

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];

const grid1 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];
const grid2=[
    ["1","1","1"],
    ["0","1","0"],
    ["1","1","1"]
]
console.log(numIslands(grid1));
console.log(numIslandBFS(grid2));