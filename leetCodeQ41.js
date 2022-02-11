/**
 * @param {number[]} nums
 * @return {number}
 */
/*
*Please notice the tech skill here. how to deterine the number array is a from sequence array from 1 to n. 
Array start with index 0 , -> nums[0] = nums[nums[0]-1] , if nums[0]= 1
nums[i] = nums[nums[i]-1];
*/
 var firstMissingPositive = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        while(nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[nums[i]-1]){
            let temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
        }
    }
     for(let i = 0; i< nums.length ; i++){
         if(nums[i] != i + 1) return i+1;
     }
     
     return nums.length+1;
 };