/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let result = Number.MAX_SAFE_INTEGER;
    const dp = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(Number.MAX_SAFE_INTEGER));
    for(let i = 0 ; i < matrix.length; i++){
        result = Math.min(result, dfs(matrix, 0, i , dp));
    }
    return result;
};

const dfs=(matrix, row, col, dp) =>{
    if(row == matrix.length && col >= 0 && col < matrix[0].length){
        return 0;
    }

    if(row >= matrix.length || row < 0 || col < 0 || col >= matrix[0].length){
        return Number.MAX_SAFE_INTEGER;
    }

    if(dp[row][col] != Number.MAX_SAFE_INTEGER) return dp[row][col];

    let sum1 = dfs(matrix, row + 1 , col - 1, dp);
    let sum2 = dfs(matrix, row + 1, col, dp);
    let sum3 = dfs(matrix, row + 1, col + 1 , dp);

    dp[row][col] = matrix[row][col] + Math.min(sum1, sum2, sum3);
    return dp[row][col];
}