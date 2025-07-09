/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let midIndex = Math.floor(nums.length /2);
    let startIndex = 0 ;
    let endIndex = nums.length -1;
    while(startIndex <= endIndex){
        let midIndex = Math.floor((startIndex+endIndex+1) /2);
        if(nums[midIndex] == target) return midIndex;
        if(nums[midIndex] < target){
            startIndex = midIndex+1;
        }
        if(nums[midIndex] > target){
            endIndex = midIndex -1;
        }
    }
    
    return -1;
};