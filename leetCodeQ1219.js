/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let maxGold = 0 ;

    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            if(grid[i][j] != 0 ){
                maxGold = Math.max(maxGold, dfs(grid, i, j , new Set(), m,n))
            }
        }
    }
    return maxGold;
};

const dfs=(grid, i , j , visited, m , n) =>{
    let maxGold = 0 ;
    if(i >= m || i < 0 || j >= n || j <0) return 0;
    let gold = grid[i][j];

    let key = i +"|"+j;
    if(visited.has(key)) return 0; 
    visited.add(key);

    if(gold == 0) return 0 ;

    const directions = [[-1,0],[0,1],[1,0],[0,-1]];
    
    for(let d of directions){
        let nextI = i + d[0];
        let nextJ = j + d[1];
        maxGold = Math.max(maxGold, gold + dfs(grid , nextI , nextJ, visited, m,n));
    }

    visited.delete(key);
    return maxGold;
}
