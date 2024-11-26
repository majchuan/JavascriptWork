/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    for(let i = 0 ; i < grid.length; i++){
        let isChampion = true;
        for(let j = 0; j < grid[0].length; j++){
            if(i != j && grid[i][j] == 0){
                isChampion = false;
            }
        }
        if(isChampion){
            return i;
        }
    }

    return -1;
};
