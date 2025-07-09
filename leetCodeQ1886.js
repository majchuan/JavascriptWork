/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
 var findRotation = function(mat, target) {
    //rotate 90 degree
    for(let count = 1 ; count <=4 ; count++){
        for(let i = 0 ; i< mat.length ; i++){
            for(let j = i+1 ; j< mat[0].length ; j++){
                let temp = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = temp;
            }
        }
        for(let i = 0 ; i< mat.length; i++){
            mat[i].reverse();
        }
        
        if(isSameMatrix(mat, target)){
            return true;
        }
    }
    return false;
};

const isSameMatrix = (mat, target) =>{
    for(let i = 0 ; i < mat.length; i++){
        for(let j = 0; j<mat[0].length ; j++){
            if(mat[i][j] != target[i][j]){
                return false;
            }
        }
    }
    
    return true;
}