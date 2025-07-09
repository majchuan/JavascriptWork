/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const set = new Set();
    let operations = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        operations++;
        if (nums[i] <= k) set.add(nums[i]);
        if (set.size === k) return operations;
    }
    return operations;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperationsSlowFunction = function(nums, k) {
    const coll = [];
    for(let i = 1 ; i <= k ; i++){
        coll.push(i);
    }

    let operations = 0 ;

    for(let i = nums.length -1 ; i >= 0; i--){
        if(coll.length > 0 && coll.includes(nums[i])){
            coll.splice( coll.indexOf(nums[i]),1);
        }
        operations++;
        if(coll.length == 0) return operations;
    }

    return operations;
};