/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    nums.sort((a,b) => a - b)
    let temp = 1;
    if (nums[nums.length - 1] != nums[nums.length-2]) {
        return false;
    }
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] != temp++) {
            return false;
        }
    }

    return true;
};