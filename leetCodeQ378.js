/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    const result = [];
    for(let i = 0 ; i< matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            result.push(matrix[i][j]);
        }
    }
    
    result.sort((x,y) => x-y);
    return result[k-1];
};

var kthSmallestFastApproach = function (matrix, k) {
    let low = matrix[0][0]
    let high = matrix[matrix.length - 1][matrix[0].length - 1] + 1
    while (low < high) {
      const mid = low + Math.floor((high - low) / 2)
      let count = 0
      for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix.length; j++)
          if (matrix[i][j] <= mid) count++
          else break
  
      if (count < k) low = mid + 1
      else high = mid
    }
    return low
  }