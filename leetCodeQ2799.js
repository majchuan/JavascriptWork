/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let result = 0 ;
    let hash_nums = new Map();
    const n = nums.length;
    let right =0;
    const distinctNums = new Set(nums).size;

    for(let left = 0 ; left < n ; left++){
        if(left > 0){
            hash_nums.set(nums[left-1], hash_nums.get(nums[left-1]) - 1); 
            if(hash_nums.get(nums[left-1]) <= 0 ){
                hash_nums.delete(nums[left-1]);
            }
        }

        while(right < n && hash_nums.size < distinctNums){
            const curr = nums[right];
            hash_nums.set(curr, (hash_nums.get(curr) || 0) + 1);
            right++;
        }

        if(hash_nums.size == distinctNums){
            result += n - right + 1;
        }
    }

    return result;
};
