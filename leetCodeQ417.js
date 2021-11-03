/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if(!matrix.length) return []
    const rNum = matrix.length, cNum = matrix[0].length;
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const pacific = matrix;
    const atlantic = [...matrix.map(row => [...row])]; // deep clone
    const output = []
    
    function callDFS(r, c, arr) {
        const val = arr[r][c]
        arr[r][c] = '#'
        
        for(let [dr, dc] of dir) {
            dr += r;
            dc += c;
            if(arr[dr] && arr[dr][dc] !== undefined && 
               arr[dr][dc] !== '#' && arr[dr][dc] >= val) 
                callDFS(dr, dc, arr);
        }
    }
    
    for(let c = 0; c < cNum; c++) {
        callDFS(rNum-1, c, atlantic); // bottom 
        callDFS(0, c, pacific); // top
    }
    
    for(let r = 0; r < rNum; r++) {
        callDFS(r, cNum-1, atlantic); // right
        callDFS(r, 0, pacific); // left
    }
    
    for(let r = 0; r < rNum; r++) {
        for(let c = 0; c < cNum; c++) {
            if(pacific[r][c] === '#' &&
               atlantic[r][c] === '#') 
                output.push([r, c]);
        }
    }
    return output;

};

const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
console.log(pacificAtlantic(heights));

[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]