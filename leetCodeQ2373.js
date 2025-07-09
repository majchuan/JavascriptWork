/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let n = grid.length;
    const maxLocal = new Array(n-2).fill().map(() => new Array(n-2).fill(-1));

    for(let i = 0; i < n -2 ; i++){
        for(let j = 0 ; j < n-2 ; j++){
            maxLocal[i][j] = findMax(grid, i ,j);
        }
    }

    return maxLocal;
};

const findMax = (grid, x, y) => {
    let maxElement = 0;

    for(let i = x ; i < x+3; i++){
        for(let j = y ; j < y+3; j++){
            maxElement = Math.max(maxElement, grid[i][j]);
        }
    }

    return maxElement;
}