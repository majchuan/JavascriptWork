/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const hash_grid ={};
    let count = 0 ;

    for(let i = 0 ; i < grid.length ; i++){
        let key = grid[i].join("|");
        hash_grid[key] != null ? hash_grid[key]++ : hash_grid[key] = 1 ;
    }

    for(let j = 0 ;  j<grid[0].length ; j++){
        const columnArr = [];
        for(let i = 0 ; i < grid.length ; i++){
            columnArr.push(grid[i][j]);
        }
        const key = columnArr.join("|");
        if(hash_grid[key] != null){
            count += hash_grid[key];
        }
    }
    return count
};

