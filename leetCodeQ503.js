/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
    for(let i = 0 ; i < nums.length * 2 ; i++){
        while(stack.length > 0 && nums[stack[stack.length-1]] < nums[i % nums.length]){
            result[stack.pop()] = nums[i % nums.length];
        }

        stack.push(i % nums.length);
        //console.log(stack, result);
    }

    return result;
};