/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
if the cumulative sum up to two indices, say i and j is at a difference of k i.e. 
if sum[i]−sum[j]=k , the sum of elements lying between indices i and j is k.
*/
const subarraySum = (nums, k) => {
    const hashmap = {0: 1}
    let count = 0, total = 0
    for(const num of nums) {
        total += num;
        if(hashmap[total - k]) count = count + hashmap[total - k];
        hashmap[total] ? hashmap[total]++ : hashmap[total] = 1;
    }
    return count
};


const nums=[1,2,1,2,1] 
const k=3;

console.log(subarraySum(nums,k));