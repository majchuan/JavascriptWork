/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let minNum = Number.MAX_SAFE_INTEGER;
    let negativeCount = 0 ;
    let sum = 0 ;

    for(let i = 0 ; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            sum += Math.abs(matrix[i][j]);
            if(matrix[i][j] <0 ){
                negativeCount++;
            }
            minNum = Math.min(minNum, Math.abs(matrix[i][j]));
        }
    }

    if(negativeCount % 2 != 0){
        sum -= 2 * minNum;
    }

    return sum;
};