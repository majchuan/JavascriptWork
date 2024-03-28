/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let max_length = 0 ;
    const hash_nums ={};
    let left = 0;
    let right = 0;

    while(right < nums.length){
        hash_nums[nums[right]] ? hash_nums[nums[right]]++ : hash_nums[nums[right]]=1;

        while(hash_nums[nums[right]] > k ){
            if(hash_nums[nums[left]]){
                hash_nums[nums[left]]--;
            }
            left++;
        }
        
        max_length = Math.max(max_length, right - left + 1);
        right++;
    }

    return max_length;
};
