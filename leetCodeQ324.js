/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    const sortNums = [...nums].sort((a,b) => a-b);
    console.log(sortNums);
    let right = nums.length -1;
    let left = Math.floor(right / 2);

    for(let i = 0 ; i < nums.length ; i++){
        nums[i] = i % 2 == 0 ? sortNums[left--] : sortNums[right--];
    }
};

const nums = [1,5,1,1,6,4], nums1=[1,3,2,2,3,1];
wiggleSort(nums1);
console.log(nums1);