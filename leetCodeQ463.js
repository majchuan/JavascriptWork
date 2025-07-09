/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    for(let i = 0 ; i < grid.length; i++){
        for(let j = 0 ; j < grid[0].length; j++){
            if(grid[i][j]==1){
                return dfs(grid, i, j);
            }
        }
    }
    return 0;
};

const dfs=(grid,i,j)=>{
    if(i < 0 || i >= grid.length ||  j < 0 || j >= grid[0].length || grid[i][j] == 0 ){
        return 1;
    }

    if(grid[i][j] == -1 ){
        return 0;
    }

    grid[i][j] = -1;

    let perimeter = 0 ;

    let up = dfs(grid, i-1,j);
    let down = dfs(grid, i+1 ,j);
    let left = dfs(grid, i,j-1);
    let right = dfs(grid, i, j+1);

    perimeter = perimeter + up + down + left + right;

    return perimeter;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let isLands = 0 ;
    let neighbors = 0 ;

    for(let i = 0 ; i < grid.length; i++){
        for(let j = 0 ; j < grid[0].length ; j++){
            if(grid[i][j]==1){
                isLands++;
                if(i-1 >= 0 && grid[i-1][j] ==1){
                    neighbors++;
                }
                if(j-1 >=0 && grid[i][j-1] == 1){
                    neighbors++;
                }
            }
        }
    }

    return isLands* 4 - neighbors * 2;
};
