/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const n = nums.length;
    const pair= n / 2;

    const hash_nums = new Map();
    for(let num of nums){
        hash_nums.set(num, (hash_nums.get(num) || 0) + 1);
    }

    let totalNum = 0 ;
    for(const [key ,value ] of hash_nums.entries()){
        if(value % 2 != 0) return false;
    }

    return true;
};