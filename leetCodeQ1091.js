/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrixBFS = function(grid) {
    if(grid[0][0] != 0 ) return -1;
    const queue = [[0,0]];
    const m = grid.length, n = grid.length;
    const directions = [
        [0,1],
        [1,1],
        [1,0],
        [1,-1],
        [0,-1],
        [-1,-1],
        [-1,0],
        [-1,1],
    ]
    let steps = 1 ;
    while(queue.length > 0){
        let currLength = queue.length;
        for(let i = 0 ; i < currLength ; i++){
            let [x, y] = queue.shift();
            
            if( x >= m || x >= n || x <0 || x <0 || grid[x][y] == 1) continue;

            if(x == m-1 && y == n-1) return steps;

            grid[x][y] = 1 ;

            for(let j = 0; j < directions.length; j++){
                let newX = x + directions[j][0];
                let newY = y + directions[j][1];
                if( newX >= m || newY >= n || newX <0 || newY <0 || grid[newX][newY] == 1) continue;

                queue.push([newX, newY]); 
            }
        }
        steps++;
    }

    return  -1;
};

/*
*LeetCode Time out dfs solution.
*/
var shortestPathBinaryMatrixDFS = function(grid) {
    if(grid[0][0] != 0 ) return -1;
    const visited = new Set();
    const m = grid.length, n = grid.length;
    const directions = [
        [0,1],
        [1,1],
        [1,0],
        [1,-1],
        [0,-1],
        [-1,-1],
        [-1,0],
        [-1,1],
    ]
    return dfs(grid, m, n, 0, 0, directions ,visited, 1)
};

const dfs = (grid, m,n,i,j, directions ,visited, count) =>{
    let shortestPath = Number.MAX_SAFE_INTEGER ;

    if(i == m-1 && j == n-1){
        return count;
    }

    for(let x = 0 ; x < directions.length ; x++){
        let r = directions[x][0];
        let c = directions[x][1];

        let newI = i + r ;
        let newJ = j + c;
        //console.log(newI, newJ);

        if(newI >= m || newI < 0 || newJ >= n || newJ < 0 || grid[newI][newJ] != 0 ) continue;
        const key = newI.toString() +"|"+newJ.toString();
        if(visited.has(key)) continue;
        visited.add(key);
        
        let path = dfs(grid,m,n, newI, newJ, directions, visited, count+1);

        //console.log("path", path);
        if(path >= 0){
            shortestPath = Math.min(shortestPath, path);
        }
        visited.delete(key);
    }

    return shortestPath == Number.MAX_SAFE_INTEGER ?  -1 : shortestPath;
}

const grid=[[0,1],[1,0]], 
grid1 = [[0,0,0],[1,1,0],[1,1,0]], 
grid2=[[0,0,1,1,0,0],[0,0,0,0,1,1],[1,0,1,1,0,0],[0,0,1,1,0,0],[0,0,0,0,0,0],[0,0,1,0,0,0]];
console.log(shortestPathBinaryMatrix(grid2));