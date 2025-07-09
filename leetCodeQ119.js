/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const dp = [[1]];

    for(let i = 1 ; i <= rowIndex ; i++){
        let prevRow = dp[i-1];
        let newRow = [1];
        for(let j = 1 ; j < prevRow.length; j++){
            newRow.push(prevRow[j-1] + prevRow[j]);
        }
        newRow.push(1);
        dp.push(newRow);
    }

    return dp[rowIndex];
};