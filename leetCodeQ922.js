/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    for(let i = 0, j = 1; i < nums.length;){
        if(nums[i] % 2 == 0){
            i+= 2;
        }

        if(nums[j] % 2 != 0){
            j += 2;
        }else{
            [nums[j], nums[i]] = [nums[i], nums[j]];
        }
    }
    return nums;
};