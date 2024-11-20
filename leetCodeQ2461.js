/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const hash_sum = new Map();
    const n = nums.length;
    let left = 0 ;
    let right = 0; 
    let maxSum = 0 ;
    let sum = 0;

    while(left < n){
        while((right - left) < k && right < n ){
            if(hash_sum.get(nums[right]) == 1 ){
                break;
            }else{
                hash_sum.set(nums[right],1);
            }
            sum += nums[right];
            right++;
        }

        if((right - left) == k){
            maxSum = Math.max(maxSum, sum);
        }
        sum -= nums[left];
        hash_sum.delete(nums[left]);
        left++;
    }

    return maxSum;
};
