/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canBeIncreasing = function(nums) {
    let badNumber = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] <= nums[i-1]){
            badNumber++;
            if(badNumber > 1) return false;
            
            if(nums[i] <= nums[i-2] && nums[i-1] >= nums[i+1]) return false;
        }
    }
    
    return true;
};