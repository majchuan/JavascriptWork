/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    nums.sort((x,y) => x-y);
    return nums[0];
};


const findMinWithDuplicate = (nums) =>{
    const removeDuplicateNums = [...new Set(nums)];
    return helper(removeDuplicateNums);
}

const helper = (nums) =>{
    let midIndex = Math.floor((nums.length - 1) /2) ;
    if(nums.length == 1){
        return nums[0];
    } 

    const leftMinValue = helper(nums.slice(0,midIndex+1));
    const rightMinValue = helper(nums.slice(midIndex+1,nums.length));

    return Math.min(leftMinValue,rightMinValue);
}

const nums = [2,2,2,0,1];
console.log(findMinWithDuplicate(nums));