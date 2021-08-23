/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var longestIncreasingPath = function(matrix) {
    let maxIncreaseLength = 1 ; 
    const dp = new Array(matrix.length);
    for(let i = 0 ; i < dp.length ; i++){
        dp[i] = new Array(matrix[0].length).fill(null);
    }

    for(let i = 0 ; i < matrix.length ; i++){
        for(let j = 0 ; j < matrix[0].length; j++){
            //console.log(i,j);
            maxIncreaseLength = Math.max(reach(matrix,i,j, dp), maxIncreaseLength);
        }
    }

    return maxIncreaseLength;
};

const reach = (matrix, startX, startY,dp) =>{
    if(dp[startX][startY] != null) return dp[startX][startY] ;
    const directions = [[0,1],[-1,0],[0,-1],[1,0]];
    let currentMatrixValue = matrix[startX][startY] , maxLength = 1;
    for(let dir of directions){
        let x = startX + dir[0];
        let y = startY + dir[1];
        if( x < matrix.length && x>= 0 && y < matrix[0].length && y >=0 && currentMatrixValue < matrix[x][y]){
            const length = reach(matrix,x,y,dp)+1;
            maxLength = Math.max(length,maxLength);
        }
    }
    dp[startX][startY] = maxLength;
    return maxLength;
}

const matrix =  [[9,9,4],[6,6,8],[2,1,1]];

console.log(longestIncreasingPath(matrix));

/*

const longestIncreasingPath = (matrix) => {
  if (matrix == null || matrix.length === 0) return 0;
  const h = matrix.length;
  const w = matrix[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const cache = [...Array(h)].map(() => Array(w).fill(null));

  const go = (x, y) => {
    if (cache[x][y] != null) return cache[x][y];
    let max = 1;
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i >= 0 && i < h && j >= 0 && j < w && matrix[i][j] > matrix[x][y]) {
        const len = go(i, j) + 1;
        max = Math.max(max, len);
      }
    }
    cache[x][y] = max;
    return max;
  };

  let max = 1;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const len = go(i, j);
      max = Math.max(max, len);
    }
  }
  return max;
};

*/