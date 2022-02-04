/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const hash_nums = {};
    for(let i=0; i < nums.length; i++){
        hash_nums[nums[i]] != null ? hash_nums[nums[i]]++ : hash_nums[nums[i]]=1;
    }

    for(let i =0; i <= nums.length ; i++){
        if(hash_nums[i] == null){
            return i;
        }
    }

    return -1;
};

const nums =[3,0,1];
console.log(missingNumber(nums));