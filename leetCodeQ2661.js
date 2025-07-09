/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const hash_mat = {}
    const m = mat.length;
    const n = mat[0].length;
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            hash_mat[mat[i][j]] = [i,j];
        }
    }

    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);

    for(let i = 0 ; i < arr.length ; i++){
        let [row, col] = hash_mat[arr[i]];
        rows[row]++;
        if(rows[row] == n){
            return i ;
        }

        cols[col]++;
        if(cols[col] == m ){
            return i;
        }
    }

    return -1;
};