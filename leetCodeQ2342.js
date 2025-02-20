/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const hash_nums = new Map();
    let maxSum = -1;
    for(let i = 0 ; i < nums.length; i++){
        const sum = nums[i].toString().split('').reduce((a,b) => parseInt(a) + parseInt(b),0);
        if(hash_nums.has(sum)){
            maxSum = Math.max(maxSum, hash_nums.get(sum) + nums[i]);
            hash_nums.set(sum, Math.max(hash_nums.get(sum), nums[i]));
        }else{
            hash_nums.set(sum, nums[i]);
        }
    }

    return maxSum;
};