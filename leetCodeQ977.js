/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let left = 0, right = nums.length - 1;

    const result = new Array(nums.length);

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[right]) > Math.abs(nums[left])) {
            result[i] = nums[right] ** 2;
            right--;
        } else {
            result[i] = nums[left] ** 2;
            left++;
        }
    }

    return result;
};