/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const hash_mat = {};
    const result = [];
    const m = mat.length;
    const n = mat[0].length;

    for(let i = 0 ; i< m ; i++){
        for(let j = 0 ; j < n ; j++){
            hash_mat[i+j] ? hash_mat[i+j].push(mat[i][j]) : hash_mat[i+j] = [mat[i][j]];
        }
    }

    for(let key in hash_mat){
        if(key % 2 == 0){
            let reverse = hash_mat[key].reverse();
            result.push(...reverse);
        }else{
            result.push(...hash_mat[key]);
        }
    }

    return result;
};