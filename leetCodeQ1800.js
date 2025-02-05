/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let maxSum = 0 ;
    let sum = nums[0];

    for(let i = 1 ; i < nums.length; i++){
        maxSum = Math.max(maxSum, sum);
        if(nums[i-1] < nums[i]){
            sum += nums[i];
        }else{
            sum = nums[i] ;
        }
    }

    maxSum = Math.max(maxSum, sum);

    return maxSum;
};