/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let sum = 0 ;
    let result = 0 ;
    for(let i = 0 ; i < nums.length; i++){
        sum += nums[i];
        result = Math.max(result, Math.ceil(sum/(i+1)));
    }

    return result;
};

const nums=[13,13,20,0,8,9,9];
const nums1=[6,9,3,8,14];
console.log(minimizeArrayValue(nums1));