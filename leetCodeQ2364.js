/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    const hash_nums = {};
    let count = 0;
    let n = nums.length;
    let totalPair = n * (n -1) /2 ;
    for(let i = 0 ; i < n; i++){
        let diff = i - nums[i];
        if(hash_nums[diff] != null){
            count += hash_nums[diff];
            hash_nums[diff]++;
        }else{
            hash_nums[diff]=1;
        }
    }

    return totalPair - count;
};