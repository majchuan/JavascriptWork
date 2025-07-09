/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const result = new Array(m).fill().map(x => new Array(n));
    const onesRow = new Array(grid.length).fill(0);
    const onesCol = new Array(grid[0].length).fill(0);
    const zeroRow = new Array(grid.length).fill(0);
    const zeroCol = new Array(grid[0].length).fill(0);

    for(let i = 0 ; i < m ; i++ ){
        for(let j =0 ; j < n ; j++){
            if(grid[i][j] == 1){
                onesRow[i]++;
                onesCol[j]++;
            }

            if(grid[i][j] == 0){
                zeroRow[i]++;
                zeroCol[j]++;
            }
        }
    }

    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            result[i][j] = onesRow[i] + onesCol[j] - zeroRow[i] - zeroCol[j];
        }
    }

    return result;
};