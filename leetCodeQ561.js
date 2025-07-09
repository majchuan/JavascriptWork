/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((x,y)=> x-y);
    let sum = 0;
    for(let i= 0; i < nums.length; i+=2){
        sum+=nums[i];
    }
    
    return sum;
};

const nums=[1,4,3,2];
console.log(arrayPairSum(nums));