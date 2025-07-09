/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function(nums) {
    const len = nums.length
	const dp = new Array(len).fill(0)
	const stack = []
	let steps = 0
	let j = -1

	for (let i = len - 1; i >= 0; i--) {
		while (j >= 0 && nums[i] > nums[stack[j]]) {
			dp[i] += 1
			dp[i] = Math.max(dp[i], dp[stack[j--]])
			steps = Math.max(steps, dp[i])
		}

		stack[++j] = i
	}

	return steps
};