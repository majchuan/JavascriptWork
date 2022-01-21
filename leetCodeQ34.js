/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let startIndex = 0 ;
    let endIndex = nums.length - 1; 
    const result = [];
    if(nums.length ==0) return [-1,-1];
    
    while(startIndex <= endIndex){
        let midIndex = Math.floor((startIndex + endIndex)/2)
        if(nums[midIndex] == target) {
            startIndex = midIndex;
            endIndex = midIndex;
            while(nums[startIndex] == target) {
                startIndex--;
            }

            while(nums[endIndex] == target){
                endIndex++;
            }

            return [startIndex +1 , endIndex-1];
        }
        if(nums[midIndex] > target){
            endIndex = midIndex - 1 ;
        }
        if(nums[midIndex] < target){
            startIndex = midIndex + 1;
        }
    }
    if(result.length == 0) {
        return [-1,-1];
    }

    return result ; 
};

const nums = [5,7,7,8,8,10], target = 8;
const nums1 =[1], target1 = 1;

console.log(searchRange(nums1,target1));