/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let minNums=[];
    let maxNums =[];
    const luckyNums =[];

    for(let i = 0 ; i < matrix.length; i++){
        minNums.push(Math.min(...matrix[i]));
    }

    for(let j = 0 ; j < matrix[0].length; j++){
        let maxNum = Number.MIN_SAFE_INTEGER;
        for(let i = 0 ; i < matrix.length; i++){
            maxNum = Math.max(matrix[i][j],maxNum);
        }
        maxNums.push(maxNum);
    }

    for(let i = 0 ; i < matrix.length; i++){
        for(let j = 0 ; j < matrix[0].length; j++){
            if(matrix[i][j] == minNums[i] && matrix[i][j] == maxNums[j]){
                luckyNums.push(matrix[i][j]);
            }
        }
    }

    return luckyNums;
    
};


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbersFastApproach  = function(matrix) {
    for(let i = 0; i < matrix.length; i++) {
        let minNumber = Math.min(...matrix[i]), columnIndex = matrix[i].indexOf(minNumber);

        if(matrix.every(arr => arr[columnIndex] <= minNumber)) return [minNumber];
    }

    return [];
};