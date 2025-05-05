/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let count = 0;

    const isSortedIncreasing = (nums) => {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) return false;
        }
        return true;
    }

    while (!isSortedIncreasing(nums)) {
        let minSum = Infinity;
        let index = -1;
        for (let i = 0; i < nums.length - 1; i++) {
            let sum = nums[i] + nums[i + 1];
            if (minSum > sum) {
                minSum = sum;
                index = i;
            }
        }
        nums.splice(index, 2, minSum);
        count++;
    }
    return count;
};
