/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let increaseCount = 1;
    let decreaseCount = 1 ;
    let maxCount = 1;

    let num = nums[0];
    for(let i = 1 ; i < nums.length; i++){
        if(num == nums[i]){
            increaseCount = 1;
            decreaseCount =1;
        }

        if(num > nums[i]){
            increaseCount=1;
            decreaseCount++;;
            num = nums[i];
        }

        if(num < nums[i]){
            decreaseCount=1;
            increaseCount++ ;
            num = nums[i];
        }

        maxCount = Math.max(maxCount, increaseCount, decreaseCount);
    }

    return maxCount;
};