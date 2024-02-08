/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const memo = {};
    return dfs(nums, target, 0 , 0 , memo);
};

const dfs=(nums, target, index, sum, memo)=>{
    if(index == nums.length){
        if(sum == target) return 1;
        return 0;
    }

    const key = index + "|"+ sum;

    if(memo[key] != null ) return memo[key];

    const plusTimes = dfs(nums, target, index+1, sum + nums[index], memo);
    const minusTimes = dfs(nums, target, index+1, sum - nums[index] , memo);

    memo[key] = plusTimes + minusTimes;


    return memo[key];
}