/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m = grid.length, n = grid[0].length;
    let row = m - 1, col = 0;
    let ans = 0;
    while (row >= 0 &&  col < n) {
        if (grid[row][col] >= 0) {
            col++;
        } else {
            ans += n - col;
            row--;
        }
    }

    return ans;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegativesBinarySearch = function(grid) {
    let negativeResult = 0 ;
    for(let i = 0 ; i < grid.length ; i++){
        let left = 0 , right = grid[i].length -1;
        while(left <= right){
            let mid = Math.floor((left + right)/2);
            if(grid[i][mid] >= 0 ){
                left = mid + 1;
            }else{
                right= mid -1;
            }
        }
        //console.log(left);
        negativeResult += grid[i].length - left ;
    }

    return negativeResult;
};