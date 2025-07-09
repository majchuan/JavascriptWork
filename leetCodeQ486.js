/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    return dfs(nums, 0 , 0 , 0);
};

const dfs=(nums, player ,scores1 , scores2)=>{
    if(nums.length == 0){
        return scores1 >= scores2 ;
    }

    // take first elemennt of nums,
    if(player == 0 ){
        scores1 += nums[0];
        let isWin1 = dfs(nums.slice(1), 1 , scores1, scores2);
        scores1 -= nums[0];
        scores1 += nums[nums.length -1];
        let isWin2= dfs(nums.slice(0,nums.length-1), 1, scores1, scores2);
        
        return isWin1 || isWin2;
    }else{
        scores2 += nums[0];
        let isWin1 = dfs(nums.slice(1), 0 , scores1, scores2);

        scores2 -= nums[0];
        scores2 += nums[nums.length -1];
        let isWin2 = dfs(nums.slice(0, nums.length-1), 0, scores1, scores2);
        
        return isWin1 && isWin2 ;
    }

}