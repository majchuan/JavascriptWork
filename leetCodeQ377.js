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
/*
* over time limit solution.
*/
 var combinationSum4SlowApproach = function(nums, target) {
    let totalNumber = 0 ;
    const dfs=(nums, target, sum , index) =>{
        if(sum > target) return ; 
        if(sum == target){
            totalNumber++;
            return;
        }
        
        for(let i = 0 ; i < nums.length; i++){
            dfs(nums,target, sum+nums[i], i) ;
        }
        
        return ;
    }

    dfs(nums,target, 0 , 0);
    return totalNumber;
};


const nums =[1,2,3], target = 32;

console.log(combinationSum4(nums,target));