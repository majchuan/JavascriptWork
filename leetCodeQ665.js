/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
*For example arr=[1,2,5,7,1,8], why we only need compare the value i-1 , and i-2 maximu. since we are looking for the increase array. 
* so when we break the increase array at index arr[4], which 7 > 1, since it is incrase array, so arr[1] must be less than arr[2],
* otherwise it will break the incrase array. so we only need to compare arr[4] , arr[2], 
* if arr[2] <= arr[4], so we have to change 
* arr[3] value to arr[4] to match condition arr[3] <= arr[4], because previosuely arr[3] > arr[4]. 
* if arr[2] > arr[4], so we have to change arr[4] value to arr[3] to match the condition arr[3] <= arr[4];
* at this point, we only need check counter , if it changes two value of this arr, it will return false for sure.
*/
var checkPossibility = function(nums) {
    let count = 0
    for(let i=1; i<nums.length; i++){
        if(nums[i] < nums[i-1]){
            count++
            if(count > 1) return false;
            if(i-2 < 0 || nums[i-2] <= nums[i]){
                nums[i-1] = nums[i];
            }else{    
                nums[i] = nums[i-1];
            }
        }
    }
    return true;
};
