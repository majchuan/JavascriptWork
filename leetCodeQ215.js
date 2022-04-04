/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((x,y) => y-x);
    return nums[k-1];
};

/*
*Quick select sort approach.
*/
const findKthLargestQuickSelect = (nums, k) => {
    k = nums.length - k;

    const quickSelect = (left, right) => {
        let pivot = nums[right];
        let position = left;
        
        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                [nums[position], nums[i]] = [nums[i], nums[position]]; 
                position++;
            }
        }
        [nums[position], nums[right]] = [nums[right], nums[position]];
        if (position > k) {
            return quickSelect(left, position-1);
        } else if (position < k) {
            return quickSelect(position+1, right);
        } else {
            console.log(nums);
            return nums[position];
        }
    }
    return quickSelect(0, nums.length - 1);
}

const nums=[3,2,1,5,6,4], k =2;
//findKthLargest([3,2,1,5,6,4], 2);

console.log(findKthLargestQuickSelect(nums,k));
