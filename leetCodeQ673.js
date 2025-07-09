/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumberOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1);
    const length = new Array(nums.length).fill(1);
    for(let i = 1 ; i < nums.length; i++){
        for(let j =  0; j < i ;j++){
            if(nums[j] < nums[i]){
                if(dp[j]+1 == dp[i]){
                    length[i] += length[j];
                }else if(dp[j] + 1 > dp[i]){
                    dp[i] = dp[j] + 1;
                    length[i] = length[j];
                }
            }
        }
    }

    let maxDp = Math.max(...dp);
    let counter = 0;
    for(let i = 0 ; i < dp.length; i++){
        if(dp[i] == maxDp){
            counter+=length[i];
        }
    }
    
    return counter;
};