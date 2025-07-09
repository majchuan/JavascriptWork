/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const hash_nums={};
    const result =[];
    for(let num of nums){
        hash_nums[num] ? hash_nums[num]++ : hash_nums[num] = 1;
    }
    
    for(let [key ,value ] of Object.entries(hash_nums)){
        if(value == 1){
            result.push(key);
        }
    }
    
    return result;
};