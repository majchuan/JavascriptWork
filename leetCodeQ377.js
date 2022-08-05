/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
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