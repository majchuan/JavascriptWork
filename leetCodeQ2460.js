/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] == 0) continue;
        if(nums[i] == nums[i+1]){
            nums[i] *= 2;
            nums[i+1] = 0;
        }
    }

    const non_zeros = nums.filter(x => x != 0);
    const zeros = nums.filter(x => x==0);
    return [...non_zeros, ...zeros];
};