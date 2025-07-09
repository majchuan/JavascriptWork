/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    const totalSum = nums.reduce((a,b) => a + b ,0);
    let leftPrefixSum = 0;
    let rightPrefixSum = 0;
    let result = 0;

    for(let i = 0 ; i < nums.length-1; i++){
        leftPrefixSum += nums[i];
        rightPrefixSum = totalSum - leftPrefixSum ;
        if(leftPrefixSum >= rightPrefixSum){
            result++;
        }
    }

    return result;
};