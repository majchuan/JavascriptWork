/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let zeroCount = 0;
    let left = 0 , right = 0 ;
    let maxLength = 0 ;

    while(right < nums.length){
        if(nums[right] == 0){
            zeroCount++;
        }

        if(zeroCount > 1 ){
            zeroCount -= (nums[left] == 0 ? 1 : 0);
            left++;
        }

        maxLength = Math.max(maxLength, right - left);

        right++;
    }


    return maxLength; 
};