/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const rows = mat.length ;
    const cols = mat[0].length;
    const directions = [[0,1],[0,-1], [1,0], [-1,0]];
    const queue = [];

    for(let i = 0; i < rows; i++){
        for(let j = 0 ; j < cols ; j++){
            if(mat[i][j] == 0){
                queue.push([i,j]);
            }else{
                mat[i][j] = Number.MAX_SAFE_INTEGER;
            }
        }
    }

    while(queue.length > 0){
        const [row ,col] = queue.shift();

        for(const [dr, dc] of directions){
            const newRow = row + dr ;
            const newCol = col + dc ;

            if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && mat[newRow][newCol] > mat[row][col]+1 ){
                mat[newRow][newCol] = mat[row][col] + 1 ;
                queue.push([newRow, newCol]);
            }
        }
    }

    return mat;
};