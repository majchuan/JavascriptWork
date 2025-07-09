/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    const maxNums = nums.slice();
    nums.sort((a,b) => a-b);
    maxNums.sort((a,b) => b-a);

    return (maxNums[0]*maxNums[1]) - (nums[0] * nums[1]);
};