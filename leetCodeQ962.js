/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    const stack = [];
    for(let i = 0 ; i < nums.length; i++){
        if(stack.length == 0 || nums[stack[stack.length-1]] > nums[i]){
            stack.push(i);
        }
    }

    console.log(stack);

    let maxWidth = 0 ;
    for(let i = nums.length -1 ; i >=0 ; i--){
        while(stack.length > 0 && nums[stack[stack.length-1]] <= nums[i]){
            maxWidth = Math.max(maxWidth , i - stack.pop())
        }
    }

    return maxWidth;
};
