/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
// Method 1: HashMap + Enumeration (target). Time O(n + m ^ 2) Space O(n)
function numOfPairs(nums, target) { 
    const n = nums.length;
    const m = target.length;
    const hashMap = new Map();
    for (const num of nums) {
        if (num.length < m) {
            hashMap.set(num, hashMap.get(num) + 1 || 1);  
        }
    }
    let ans = 0;
    for (let i = 1; i < m; ++i) {
        const prefix = target.substring(0, i);
        const suffix = target.substring(i);
        const prefixCount = hashMap.get(prefix) || 0;
        const suffixCount = hashMap.get(suffix) || 0;
        if (prefix !== suffix) {
            ans += prefixCount * suffixCount;
        } else {
            ans += prefixCount * (suffixCount - 1);
        }
    }
    return ans;
};

/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairsBrutalForce = function(nums, target) {
    let result = 0 ;
    for(let i = 0 ; i < nums.length; i++){
        for(let j = 0 ; j < nums.length; j++){
            if(i != j && nums[i] + nums[j] == target){
                result++;
            }
        }
    }

    return result;
};