/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const rows = heights.length;
    const columns = heights[0].length;

    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    for(let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < columns ; j++){
            min= Math.min(min, heights[i][j]);
            max= Math.max(max, heights[i][j]);
        }
    }

    return binarySearch(0 , max - min, rows, columns, heights) ;

};

const dfs=(m,n,currRow, currColumn, heights, mid, visited) =>{
    const directions=  [[0,1],[0,-1],[1,0],[-1,0]];
                       
    if(currRow == m-1 && currColumn == n-1){
        return true;
    }

    let key = currRow.toString()+"|"+currColumn.toString();
    if(visited.has(key)){ 
        return visited.get(key);
    }

    visited.set(key, false);

    for(let dir of directions){
        let nextRow = currRow + dir[0];
        let nextCol = currColumn + dir[1];

        if(nextRow >= 0 && nextCol >= 0 && nextRow <= m -1 && nextCol <= n-1){
            let distance = Math.abs(heights[nextRow][nextCol] - heights[currRow][currColumn]);
            if(distance <= mid){               
                if(dfs(m,n, nextRow, nextCol, heights, mid, visited)){
                    visited.set(key, true);
                    return visited.get(key);
                }
                
            }
        }
    }
    visited.set(key, false);
    return visited.get(key);

}

const binarySearch = (left ,right, m, n , heights) =>{
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let ans = dfs(m , n, 0 , 0 , heights, mid, new Map());

        if(ans){
            right = mid -1 ;
        }else{
            left = mid+1;
        }
    }

    return left;
}

const heights = [[1,2,2],[3,8,2],[5,3,5]];
console.log(minimumEffortPath(heights));