/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let result = 0;

    for(let row = 0 ; row < m ; row++){
        for(let col = 0 ; col < n ; col++){
            if(matrix[row][col] != 0 && row > 0) {
                matrix[row][col] += matrix[row-1][col];
            }
        }
        const currRow = matrix[row].slice();
        currRow.sort((a,b) => a - b);
        for(let i = 0 ; i < n ; i++){
            result = Math.max(result, currRow[i]* (n - i));
        }
    }

    return result;
};