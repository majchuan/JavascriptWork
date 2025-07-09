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

const findMinBinarySearch =(nums) =>{
    let minValue = nums[0];
    let left = 0;
    let right = nums.length -1;
    while(left <= right){
        if (nums[left] < nums[right]) {
            minValue = Math.min(minValue, nums[left])
            break;
        }
        let midIndex = Math.floor((left + right)/2);
        minValue = Math.min(minValue, nums[midIndex]);
        if(nums[midIndex] >= nums[left]){
            left = midIndex + 1;
        }else{
            right = midIndex -1;
        }
    }

    return minValue;
}