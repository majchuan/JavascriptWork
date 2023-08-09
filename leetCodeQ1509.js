/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    nums.sort((a,b) => a -b);
    return search(nums, 0, nums.length -1 ,3);
};

const search =(nums,left,right, count) =>{
    if(left >= right) return 0; 
    if(count == 0) return nums[right] - nums[left];
    return Math.min(
        search(nums,left, right -1 , count -1),
        search(nums, left+1 ,right, count -1)
    );
}