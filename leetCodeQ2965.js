/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const hash_grid = new Map();
    const n = grid.length;
    const result = new Array(2);

    for(let i = 0 ; i < n; i++){
        for(let j = 0 ; j < n; j++){
            hash_grid.set(grid[i][j], (hash_grid.get(grid[i][j]) || 0 ) + 1 );
        }
    }

    for(let i = 1 ; i <= n*n ; i++){
        if(hash_grid.has(i) && hash_grid.get(i) == 2){
            result[0] = i ;
        }
        if(hash_grid.has(i) == false){
            result[1] = i;
        }
    }

    return result;
}