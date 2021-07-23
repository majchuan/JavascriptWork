/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let pivotIndex = 0;
    let maxSubstractValue = 0 ; 
    for(let i= 0; i < nums.length -1 ; i++){
        if(nums[i] - nums[i+1] >= maxSubstractValue){
            maxSubstractValue = nums[i] - nums[i+1];
            pivotIndex = i ;
        }
    }

    if(nums[0]<= target && target <= nums[pivotIndex]){
        return searchIndex(nums, target, 0 , pivotIndex);
    }else if(nums[pivotIndex+1] <= target && target <= nums[nums.length-1]){
        return searchIndex(nums,target, pivotIndex+1, nums.length-1);
    }else {
        return -1;
    }

};

const searchIndex = (nums, target, startIndex, endIndex) =>{

    if(startIndex >= endIndex) {
        if(nums[startIndex] == target){
            return startIndex ;
        }else{
            return -1;
        }
    }
    const midIndex = startIndex + Math.floor((endIndex-startIndex+1) /2);

    if(nums[midIndex] == target){
        return midIndex;
    }else if(nums[midIndex] > target){
        return searchIndex(nums, target ,startIndex, midIndex-1);
    }else{
        return searchIndex(nums, target, midIndex+1, endIndex);
    }
}

const nums = [2,5,6,0,0,1,2], target = 0;
const nums1= [2,5,6,0,0,1,2], target1 =3;
const nums2= [2,2,2,3,2,2,2], target2= 3;
console.log(search(nums2,target2));