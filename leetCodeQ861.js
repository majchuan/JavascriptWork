/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    let n = grid[0].length;
    let m = grid.length;

    for(let i =0 ; i < m ; i++){
        if(grid[i][0] == 0){
            for(let j = 0 ; j <n ; j++){
                grid[i][j] = 1 - grid[i][j];
            }
        }
    }

     for (let j = 1; j < n; j++) {
        let countZero = 0;
        // Count zeros
        for(let i = 0; i < m; i++) {
            if(grid[i][j] == 0) {
                countZero++;
            }
        }
        // Flip the column if there are more zeros for better score
        if(countZero > m-countZero) {
            for(let i = 0; i < m; i++) {
                grid[i][j] = 1 - grid[i][j];
            }
        }
    }

    // Calculate the final score considering bit positions
    let score = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Left shift bit by place value of column to find column contribution
            let columnScore = grid[i][j] << (n - j - 1);
            // Add contribution to score
            score += columnScore;
        }
    }

    // return final result
    return score;
};
