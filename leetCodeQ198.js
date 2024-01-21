/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const memo =[];
    dfs(0, memo, nums);
    return memo[0];
};

const dfs=(index, memo, nums) =>{
    if(index >= nums.length) return 0;
    if(memo[index] != null) return memo[index];

    memo[index] = Math.max(dfs(index+2, memo , nums) + nums[index] , dfs(index+1 ,memo, nums));

    return memo[index];
}