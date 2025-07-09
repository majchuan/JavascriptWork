/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const hash_nums ={};
    for(let key of nums){
        hash_nums[key] ? hash_nums[key]++ : hash_nums[key] = 1;
    }
    for(let key in hash_nums){
        if(hash_nums[key] == 1){
            return key;
        }
    }
};