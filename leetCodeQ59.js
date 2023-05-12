/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = new Array(n);
    for(let i = 0; i < n ; i++){
        matrix[i] = new Array(n);
    }
    let counter = 1 ;
    for(let layer = 0; layer <Math.floor((n+1)/2); layer++){
        //direction 1 - from left to right
        for(let point = layer; point < n - layer ; point++){
            matrix[layer][point] = counter++;
        }
        //direction 2 - from top to bottom;
        for(let point = layer+1 ; point < n -layer ; point++){
            matrix[point][n-layer-1] = counter++;
        }
        
        //direction 3 - from right to left
        for(let point = n-layer-2 ; point >= layer ; point--){
            matrix[n-layer-1][point]= counter++;
        }
        //direction 4 - from bottom to up
        for(let point = n -layer -2 ; point > layer; point--){
            matrix[point][layer] = counter++;
        }
    }
    
    return matrix;
};