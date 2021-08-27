/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    let insertIndex = Number.MIN_SAFE_INTEGER;
    while(i< nums.length){
        if(target<= nums[i]){
            insertIndex = i ;
        }
        i++;
    }
    
    if (insertIndex == Number.MIN_SAFE_INTEGER){
        insertIndex = nums.length;
    }
    
    return insertIndex;
};

const nums=[1,3,5,6], target = 7;

console.log(searchInsert(nums,target));