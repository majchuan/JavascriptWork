/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    const stack = [];
    let j = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(stack.length == 0){
            stack.push([nums[i],j]);
        }

        if(stack.length > 0 && stack[stack.length -1][0] == nums[i] && stack[stack.length -1][1] % 2 ==0){
            j=stack[stack.length-1][1];
            stack.pop();
            stack.push([nums[i],j]);
        }else{
            stack.push([nums[i],stack[stack.length-1][1]+1]);
        }
    }
    //console.log(stack);
    if(stack.length % 2 != 0){
        return nums.length - stack.length + 1;
    }

    return nums.length - stack.length;
};