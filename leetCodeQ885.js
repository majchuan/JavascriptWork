/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    const visited = new Array(rows * cols).fill().map(() => new Array(2));
    let idx =  0 ;
    let step = 1 ;
    let direction = 0 ;
    while(idx < rows * cols){
        //direction = 0 -> east
        //direction = 1 -> south
        //direction = 2 -> west
        //direction = 3 -> north
        for(let i = 0 ; i < 2 ; i++){
            for(let j = 0 ; j < step; j++){
                if(rStart >= 0 && rStart <rows && cStart >=0 && cStart < cols){
                    visited[idx][0] = rStart;
                    visited[idx][1] = cStart;
                    idx++;
                }
                rStart += directions[direction][0];
                cStart += directions[direction][1];
            }
            direction = (direction + 1 ) % 4;
        }
        step++;
    }

    return visited;
};
