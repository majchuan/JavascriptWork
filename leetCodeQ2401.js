/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let usedBits = 0 ; //Tracks bits used in current window
    let left = 0 ;  
    let right = 0 ; 
    let maxLength = 0;
    let n = nums.length;

    while(right < n ){

        while((usedBits & nums[right]) != 0 ){
            usedBits ^= nums[left]; // Remove leftmost element's bits
            left++;
        }

        usedBits |= nums[right]; //Add current number to the window

        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
    
};
