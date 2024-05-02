/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a,b)=> a - b);
    let left = 0 ;
    let right = nums.length -1;
    let maxPositive = -1;
    while(left < right){
        if( nums[left] < 0 && Math.abs(nums[left]) == nums[right]){
            maxPositive = Math.max(maxPositive, nums[right]);
            right--;
            left++;
        }

        if(Math.abs(nums[left]) < nums[right]){
            right--
        }else{
            left++;
        }
    }

    return maxPositive;
};