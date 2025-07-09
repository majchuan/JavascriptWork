/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {

    if (matrix == null || matrix.length === 0 || matrix[0].length === 0) return;
  
    const h = matrix.length;
    const w = matrix[0].length;

    const dp = [];
    for (let i = 0; i <= h; i++) {
      const r = [];
      for (let j = 0; j <= w; j++) r.push(null);
      dp.push(r);
    }

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        dp[i + 1][j + 1] = dp[i + 1][j] + dp[i][j + 1] + matrix[i][j] - dp[i][j];
      }
    }

    this.dp = dp;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {

    return this.dp[row2 + 1][col2 + 1]
        - this.dp[row1][col2 + 1]
        - this.dp[row2 + 1][col1]
        + this.dp[row1][col1];
};

const matrix =[
    [3, 0, 1, 4, 2], 
    [5, 6, 3, 2, 1], 
    [1, 2, 0, 1, 5], 
    [4, 1, 0, 1, 7], 
    [1, 0, 3, 0, 5]
];
const row1 = 2, col1 = 1, row2 = 4, col2 = 3; //[2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]

this.dp[3][2] - this.dp[2][4] - this.dp[5][1] +this.dp[2][1] ;