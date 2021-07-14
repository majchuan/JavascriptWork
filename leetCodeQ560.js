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