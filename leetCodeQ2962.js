/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let left = 0;
    let right = 0;
    let result = 0;
    const maxKey = Math.max(...nums);
    let maxKeyNums = 0 ;

    while(right < nums.length){
        if(nums[right] == maxKey){
            maxKeyNums++;
        }

        while(maxKeyNums == k){
            if(nums[left] == maxKey){
                maxKeyNums--;
            }
            left++;
        }

        result +=left;
        right++;
    }

    return result;
};