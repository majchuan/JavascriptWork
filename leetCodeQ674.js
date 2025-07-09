/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    let result = 1
    let counter = 1 ;
    for(let i = 1 ; i < nums.length; i++){
        if(nums[i-1] < nums[i]){
            counter++;
            result = Math.max(result, counter);
        }else{
            counter= 1;
        }
    }
    
    return result;
};

const  nums = [1,3,5,4,7],  nums1 = [2,2,2,2,2];
console.log(findLengthOfLCIS(nums));