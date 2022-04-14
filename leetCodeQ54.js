/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let rowStart = 0;
    let rowEnd = matrix.length -1;
    let colStart = 0;
    let colEnd = matrix[0].length -1;
    let totalElements = matrix.length * matrix[0].length; 
    const result =[];
    
    while(result.length < totalElements){
        //direction 1 , from left to right;
        for(let i = colStart ; i <=colEnd ; i++){
            if(result.length < totalElements) result.push(matrix[rowStart][i]);
        }
        rowStart++;
        //direction 2, from top to bottom;
        for(let i = rowStart ; i <=rowEnd ; i++){
            if(result.length < totalElements) result.push(matrix[i][colEnd]);
        }
        colEnd--;
        //direction 3, from right to left
        for(let i = colEnd ; i >= colStart; i--){
            if(result.length < totalElements) result.push(matrix[rowEnd][i]);
        }
        rowEnd--;
        //direction 4, from bottom to up;
        for(let i = rowEnd ; i >= rowStart; i--){
            if(result.length < totalElements) result.push(matrix[i][colStart]);
        }
        colStart++;
    }
    
    return result;
};

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
const matrix1= [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix1));