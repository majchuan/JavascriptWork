/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/*
 针对二维数组来说, (i, j)来自(i - 1, j) + (i, j - 1).
 不断递增i, j即可.
 */
 
 var uniquePaths = function(m, n) {
   const arr = [];
   for (let i = 0; i < m; i++) {
     arr[i] = [];
     for (let j = 0; j < n; j++) {
       arr[i][j] = 1;
     }
   }
   for (let i = 1; i < m; i++) {
     for (let j = 1; j < n; j++) {
       arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
     }
   }
   console.log(arr);
   return arr[m - 1][n - 1];
 };

 var uniquePathsDFS = function(m, n) {
    let counter = 0 ;
    const dfs=(m,n, row, column)=>{
        
        if(row == m-1 && column == n-1){
            counter++;
            return counter;
        }
        if(row >= m-1 || column >= n-1){
            
            if(row >= m -1 && column < n-1){
                return dfs(m,n,row, column+1);
            }
            
            if(row < m-1 && column >= n-1){
                return dfs(m, n, row+1, column);
            }
        }
        
        dfs(m,n, row+1 , column);
        dfs(m,n, row, column+1);
    }
    
    dfs(m,n,0,0);
    return counter;
};


console.log(uniquePaths(3,2));