/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const result = new Array(nums.length-1).fill(0);

    for(let i = 0 ; i < nums.length ; i++){
        result[i]= nums[nums[i]];
    }

    return result;
};
