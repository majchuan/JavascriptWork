/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    let left = 0 , right = 0 ;
    let currSumOperations =  0; 
    let result = 0;
    nums.sort((a,b) => a - b)
    while(right < nums.length){
        const target = nums[right];
        currSumOperations += target; 

        while((right - left +1) * target - currSumOperations > k ){
            currSumOperations -= nums[left];
            left++;
        }

        result = Math.max(result, right - left + 1);

        right++;
    }

    return result;
};