/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let sorted = [...nums].sort((a,b)=>a-b);
    let arr = sorted.splice(nums.length-k);
    let res = [];
    for(let i =0; i<nums.length; i++){
        if(arr.includes(nums[i])){
            res.push(nums[i]);
            arr.splice(arr.indexOf(nums[i]),1);
        }
    }
    return res;
};