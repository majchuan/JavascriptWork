/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let pivotIndex = 0 ;
    for(; pivotIndex < nums.length-1 ; pivotIndex++){
        if(nums[pivotIndex] > nums[pivotIndex+1]){
            break;
        }
    }
    
    if(pivotIndex == nums.length-2 && nums[pivotIndex] < nums[pivotIndex+1]){
        pivotIndex = 0 ;
    }
    
    if(nums[pivotIndex] == target) return pivotIndex;
    
    if(nums[0] <= target && target < nums[pivotIndex]){
        return searchSortedArray(nums,target, 0 , pivotIndex);
    }else if(nums[pivotIndex+1] <= target && target <= nums[nums.length-1]){
        return searchSortedArray(nums,target, pivotIndex+1 , nums.length-1);
    }else{
        return -1 ;
    }
    
};

const searchSortedArray = (nums, target, startIndex, endIndex) =>{
    if(startIndex >= endIndex){
        if(nums[startIndex] == target){
            return startIndex;
        }else{
            return -1;
        }
    }
    
    const mid = startIndex + Math.floor((endIndex - startIndex+1)/2);
    if(nums[mid] == target) {
        return mid ;
    }else if( nums[mid] > target) {
        return searchSortedArray(nums,target, startIndex, mid-1)
    }else{
        return searchSortedArray(nums, target, mid, endIndex);
    }
}

const nums=[4,5,6,7,0,1,2], target = 0;
const nums1=[5,1,3], target1 = 3;
console.log(search(nums,target));