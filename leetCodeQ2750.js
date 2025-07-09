/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubarraySplits = function(nums) {
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    if (sum === 0) return 0;

    let ans = 1;
    let prevOne = null;
    const MOD = Math.pow(10, 9) + 7;

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if (curr === 0) continue;

        if (prevOne !== null) {
            const len = i - prevOne;
            ans = (ans * len) % MOD;
        }
        prevOne = i;
    }

    return ans;
};