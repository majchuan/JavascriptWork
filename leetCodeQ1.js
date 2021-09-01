/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash_nums={};
    const result =[];
    for(let i= 0; i< nums.length ; i++){
        if(hash_nums[target - nums[i]] != null){
            return [hash_nums[target - nums[i]], i];
        }else{
            hash_nums[nums[i]] = i;
        }
    }
    
    return result;
};
const nums = [2,7,11,15], target = 9;
console.log(twoSum(nums,target));