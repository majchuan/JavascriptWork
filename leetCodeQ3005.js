/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const hash_nums={};
    for(let num of nums){
        hash_nums[num] ? hash_nums[num]++ : hash_nums[num] = 1 ;
    }

    let freqs = Object.values(hash_nums).sort((a,b) => a - b);
    let maxFreq = Math.max(...freqs);

    return freqs.filter(x => x == maxFreq).length * maxFreq;
};