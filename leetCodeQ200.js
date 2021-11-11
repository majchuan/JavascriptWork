/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let counter = 0;
    for(let i = 0 ; i < grid.length; i++){
        for(let j = 0 ; j < grid.length; j++){
            if(grid[i][j] == 1){
                counter++;
                dfs(grid, i,j);
            }
        }
    }

    return counter ;
    
};

const dfs =(grid, m, n) =>{
    
    if (m < 0 || n < 0 || m === grid.length || n === grid[0].length) return;
    if (grid[m][n] === "0") return;
    
    console.log(grid);

    grid[m][n] = "0";
    dfs(grid,m-1, n);
    dfs(grid,m+1, n);
    dfs(grid,m, n-1);
    dfs(grid,m, n+1);
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
  ]

  console.log(numIslands(grid1))