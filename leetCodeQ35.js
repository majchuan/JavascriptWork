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

//binary search function
const searchInsertBinary = (arr,target) =>{
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    return end + 1;
}
const nums=[1,3,5,6], target = 7 , target1 = 0 ;

//console.log(searchInsert(nums,target));
console.log(searchInsertBinary(nums,target1));