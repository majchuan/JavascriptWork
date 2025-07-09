/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const memo = {};
    return dfs(m,n,maxMove, startRow, startColumn, memo, 0);
};

const dfs= (m,n,maxMove, startRow, startColumn, memo, path) => {
    
    if(path > maxMove){
        return 0 ;
    }

    if((startRow >= m || startRow < 0  || startColumn >= n || startColumn < 0 ) ){
        return 1;
    }

    const key = startRow + "|" + startColumn + "|"+ path ;

    if(memo[key] != null){
        return memo[key];
    }

    let up = dfs(m,n,maxMove, startRow - 1,startColumn, memo, path+1);
    let down = dfs(m,n, maxMove, startRow +1 , startColumn, memo, path+1);
    let left = dfs(m,n,maxMove, startRow, startColumn -1 , memo, path +1);
    let right = dfs(m,n,maxMove, startRow, startColumn +1, memo, path+1);

    let sum =( up + down +left + right ) % (10**9+7);

    memo[key] = sum ;


    return sum;
}

const m =1 , n=3, maxMove = 3, startRow = 0 , startColumn = 1 ;
console.log(findPaths(m,n,maxMove,startRow,startColumn));