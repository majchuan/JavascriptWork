/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    const visitedOrange = Array(grid.length).fill(false).map(x => Array(grid[0].length).fill(false))
    if(grid[0][0] == 1){
        grid[0][0] = 2;
    }

    visitedOrange[0][0] = true;
    
    let counter2 = dfs(grid,0,1,2,visitedOrange,1);
    let counter3 = dfs(grid,1,0,3,visitedOrange,1);
    
    let counter = Math.max(counter2, counter3);
    console.log(counter2,counter3);
    
    for(let i = 0 ; i < visitedOrange.length ; i++){
        if(visitedOrange[i].includes(false)){
            return -1;
        }
    }
    
    return counter;
};

const dfs =(grid, m, n , direction, visitedOrange ,counter) =>{
    
    if( m <0 || m >= grid.length || n < 0 || n >= grid[0].length){
        return counter;
    }
    
    if(m < grid.length && n < grid[0].length){
        if(visitedOrange[m][n] == false){
            visitedOrange[m][n] = true;
            if(grid[m][n] == 1){
                grid[m][n] = 2
            }else if(grid[m][n]== 0){
                return counter;
            }
     
        }else{
            return counter;
        }
    }
    
    if(grid.length-1 == m && grid[0].length-1 == n){
        if(grid[m][n] == 1){
            grid[m][n]==2;
            counter++;
        }

        return counter;
    }
    
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    counter1 = dfs(grid,m-1,n,1, visitedOrange,counter+1);
    counter2 = dfs(grid,m,n+1,2, visitedOrange,counter+1);
    counter3 = dfs(grid,m+1,n,3, visitedOrange,counter+1);
    counter4 = dfs(grid,m,n-1,4, visitedOrange,counter+1);
    
    
    return Math.max(counter1, counter2 , counter3, counter4)
}

const grid = [[2,1,1],[1,1,0],[0,1,1]];
const grid1 =[[0,2]];
console.log(orangesRotting(grid1));