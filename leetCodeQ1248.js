/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let left = 0;
    let right = 0 ;
    let oddNumber = 0 ;
    let counter = 0 ;
    let result = 0;
    while(right < nums.length){
        if(nums[right] % 2 != 0){
            oddNumber++;
            counter = 0;
        }

        while(oddNumber == k){
            if(nums[left] % 2 != 0){
                oddNumber--;
            }
            counter++;
            left++;
        }
        result += counter;
        right++;
    }

    return result;
};
