/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    nums.sort((x,y) => x-y);
    return nums[0];
};