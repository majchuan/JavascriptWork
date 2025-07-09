/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    nums.sort((x,y) => x-y);
    return nums[0];
};


const findMinWithDuplicate = (nums) =>{
    const removeDuplicateNums = [...new Set(nums)];
    return helper(removeDuplicateNums);
}

const helper = (nums) =>{
    let midIndex = Math.floor((nums.length - 1) /2) ;
    if(nums.length == 1){
        return nums[0];
    } 

    const leftMinValue = helper(nums.slice(0,midIndex+1));
    const rightMinValue = helper(nums.slice(midIndex+1,nums.length));

    return Math.min(leftMinValue,rightMinValue);
}

const nums = [2,2,2,0,1];
const nums1= [4,5,6,7,0,1,4];
console.log(findMinWithDuplicate(nums));

const findMinBinarySearch = (nums) =>{
    let left = 0, right = nums.length-1;
    while(left <= right){
        let mid = Math.floor( (left + right)/2);
        if(nums[mid]===nums[right]){
            right--;
        }
        else if(nums[mid]>nums[right]){
            left = mid +1;
        }else{
            right = mid-1;
        }
    }
    return nums[left];
}