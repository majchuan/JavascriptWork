/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let ans = 0;
    let left = 0;
    let right = 0;
    let sum = 0;

    while (right < nums.length) {
        sum += nums[right];

        while (sum * (right - left + 1) >= k) {
            sum -= nums[left];
            left++;
        }

        if (sum * (right - left + 1) < k) {
            ans += (right - left + 1); 
        }
        right++;
    }

    return ans;
};