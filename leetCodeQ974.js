/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
sum(i,j) = sum(0,j) - sum(0,i);
sum(i,j) mod k = 0 = sum(0,j) mod k - sum(0,i) mod k ;
sum(0,j) mod k= sum(0,i) mod k 
if the sum mod k equal it means one of subarray can be divide by k, so result should be add the total same value from a hashtable. 
*/
var subarraysDivByK = function(nums, k) {
    const hash_nums = new Map();
    hash_nums.set(0,1);
    let current_sum = 0 ;
    let result = 0 ;
    for(let i = 0 ; i < nums.length; i++){
        current_sum += nums[i];
        let complement = ( current_sum % k + k) % k;
        result += hash_nums.get(complement) || 0 ;
        hash_nums.set(complement, (hash_nums.get(complement) || 0) +1 );
    }

    return result;
};

