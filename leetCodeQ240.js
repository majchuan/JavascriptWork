/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0) return false ; 
    const high = matrix.length;
    const wide = matrix[0].length;
    let i = 0, j = wide -1 ; 
    
    while(j >= 0 && i < high){
        if(matrix[i][j] == target) return true;
        if(matrix[i][j] > target){
            j--;
        }else{
            i++;
        }
    }
    
    return false;
};