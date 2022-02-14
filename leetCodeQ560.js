/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//sum(i,j)=sum(0,j)-sum(0,i), where sum(i,j) represents the sum of all the elements from index i to j-1.
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