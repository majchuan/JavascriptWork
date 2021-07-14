/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 const checkSubarraySum = (nums, k)=>{
    let sum = 0
    const hash = {}
    hash[0] = -1
    
    for (let i = 0; i<nums.length; i++) {
        sum += nums[i]
        
        if (k!=0) sum %= k
        
        if ( hash[sum] !== undefined   ) {
            if(i-hash[sum]>1) return true
        } else {
            hash[sum] = i
        }
    }
    
    return false
};

const nums=[23,2,4,6,7];
const k = 6;

