/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {

    const dfs = (grid, row, col) => {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) {
            return;
        }
        grid[row][col] = 0;
        gx = Math.max(row, gx);
        gy = Math.max(col, gy);
        
        dfs(grid, row - 1, col);
        dfs(grid, row, col + 1);
        dfs(grid, row + 1, col);
        dfs(grid, row, col - 1);
    }

    let ans = [];
    let gx = 0;
    let gy = 0;
    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[i].length; j++) {
            if (land[i][j] === 1) {
                gx=0;
                gy=0;
                dfs(land, i, j);
                ans.push([i, j, gx, gy]);
            }
        }
    }
    return ans;
};