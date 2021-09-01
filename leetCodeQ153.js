/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let start = 0 ;
    let end = nums.length -1 ;
    let midIndex = Math.floor((start + end)/2);
    if(nums.length ==1){
        return nums[0];
    }
    const leftMin = findMin(nums.slice(0,midIndex+1));
    const rightMin = findMin(nums.slice(midIndex+1,nums.length));
    
    return Math.min(leftMin, rightMin);
};

const nums=[3,4,5,1,2];
console.log(findMin(nums));