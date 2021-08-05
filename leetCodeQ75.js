/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let swap = true;
    while(swap){
        swap = false ;
        for(let i = 0 ; i< nums.length-1 ; i++){
            if(nums[i] > nums[i+1]){
                let temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
                swap = true ;
            }
        }
    }
};