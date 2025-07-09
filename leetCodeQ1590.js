/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    const sum = nums.reduce((a,b) => a+b,0);
    const target = sum % p ; 

    if(target == 0) return 0 ;

    const hash_num = new Map();
    hash_num.set(0,-1);

    let current_sum = 0 ;
    let result = nums.length ;

    for(let i = 0 ; i < nums.length ; i++){
        current_sum = (current_sum + nums[i]) % p;
        let needed = (current_sum - target + p) % p;

        if(hash_num.has(needed)){
            result = Math.min(result, i - hash_num.get(needed));
        }

        hash_num.set(current_sum, i);
    }   

    return result == nums.length ? -1 : result;
};
