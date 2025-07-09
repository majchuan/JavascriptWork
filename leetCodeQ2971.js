/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => a - b);
    let right = nums.length -1;
    let currSum = 0 ;
    let sum = nums.reduce((a,b) => a+b , 0);

    for(let i = right ; i >= 2 ; i--){
        currSum += nums[i];
        const perimeter = sum - currSum;
        if(perimeter > nums[i]) return perimeter + nums[i]; 
    }

    return -1;

};