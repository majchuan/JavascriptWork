/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let maxSum = 0;
    for(let i = 0 ; i < k; i++){
        sum += nums[i];
    }
    maxSum = sum ;
    for(let j= k ; j < nums.length ; j++){
        sum = sum + nums[j] - nums[j-k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k ;
};

const nums = [1,12,-5,-6,50,3], k = 4
const nums1 =[5] , k1 =1 ;

console.log(findMaxAverage(nums1, k1));