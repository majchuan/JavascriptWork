/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference=(nums) => {
    let minNum = nums[0];
    let maxDifference = -1;
    for(let i = 1; i < nums.length; i++){
        minNum = Math.min(nums[i], minNum);
        maxDifference = Math.max(maxDifference, nums[i]-minNum);
    }

    return maxDifference == 0? -1 : maxDifference ; 
}

const nums1=[7,1,5,4];
const nums2=[9,4,3,2];
console.log(maximumDifference(nums1));