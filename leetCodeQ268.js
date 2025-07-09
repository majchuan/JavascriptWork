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
/*
*
[0,1,2]
[1,2,3]
if this correct array, the sum of second array - the sum of first array = the length of array n = 3; 
so if this is not correct array, the result of two array minius will be the missing number. 
*/
var missingNumberFasterAproach = function(nums) {
    let sum = 0, expected_sum = 0;
    for (i = 0; i < nums.length; i++){
        sum += nums[i];
        expected_sum += i + 1
    }
    console.log(sum, expected_sum);
    return expected_sum - sum 
};


const nums =[3,0,1];
console.log(missingNumber(nums));