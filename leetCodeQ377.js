/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var combinationSum4 = function(nums, target) {
    const dp= new Array(target+1).fill(0);
    dp[0] = 1; 
    for(let i = 1 ; i <= target ; i++){
        for(let j = 0; j < nums.length; j++){
            if( i - nums[j] >=0 ){
                dp[i] += dp[i-nums[j]];
            }
            console.log(dp);
        }
    }
    return dp[target];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4WithMemoApproach = function(nums, target) {
    const memo = {};
    return dfs(nums, target, memo, 0);
};

const dfs=(nums, target , memo, sum) =>{
    let totalCount =  0;
    
    if(sum == target){
        return 1;
    }

    if(sum > target){
        return 0 ;
    }

    if(memo[sum] != null) return memo[sum];

    for(let i = 0 ; i < nums.length; i++){
        sum += nums[i];
        totalCount += dfs(nums, target , memo, sum);
        sum -= nums[i];
    }

    memo[sum] = totalCount;

    return totalCount;
}


const nums =[1,2,3], target = 32;

console.log(combinationSum4(nums,target));