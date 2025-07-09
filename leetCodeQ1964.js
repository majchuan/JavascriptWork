/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    let n = obstacles.length;
    const result = [], dp = []; 

    for(let i = 0 ; i < n ; i++){
        const height = obstacles[i];
        let pos = findRightPosition(dp,height,dp.length);

        dp[pos] = height;
        result[i] = pos+1;
    }

    return result;
};

const findRightPosition = (obs, target, right) =>{
    if(right == 0) return right;

    let left = 0 ;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(obs[mid] <= target){
            left = mid+1;
        }else{
            right = mid;
        }
    }

    return left;
}


const obstacles = [3,1,5,6,4,7];

console.log(longestObstacleCourseAtEachPosition(obstacles));