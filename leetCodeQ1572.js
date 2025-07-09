/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const diagonals = new Set();
    
    let i = 0 , j = 0;
    const m = mat.length;
    const n = mat[0].length;
    let sum = 0 ;

    while(i <  m && j < n){
        diagonals.add(i.toString()+"," + j.toString());
        sum += mat[i][j];
        i++;
        j++;
    }

    i = mat.length-1 , j = 0;

    while( i >= 0 && j < mat[0].length ){
        if(diagonals.has(i.toString() +","+j.toString())){
            i--;
            j++;
            continue;
        };
        diagonals.add(i.toString() +"," +j.toString());
        sum += mat[i][j];
        i--;
        j++;
    }
    return sum;
};