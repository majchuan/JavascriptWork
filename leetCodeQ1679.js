/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let left = 0 , right = nums.length -1 ;
    nums.sort((a,b) => a - b);
    //console.log(nums);
    let result = 0 ;
    while(left < right){
        if(nums[left] + nums[right] == k){
            left++;
            right--;
            result++;
        }else if(nums[left] + nums[right] < k){
            left++;
        }else{
            right--;
        }
    }

    return result;
};