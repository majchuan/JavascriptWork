/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let rightSum = nums.reduce((a,b) => a+b,0);
    let leftSum = 0;
    const result = [];
    const n = nums.length ;
    for(let i = 0 ; i < n ; i++){
        const right = rightSum - nums[i] * (n - i) ;
        const left = nums[i] * i - leftSum;
        result.push(right + left);
        rightSum -= nums[i];
        leftSum +=nums[i];
    }

    return result;
};