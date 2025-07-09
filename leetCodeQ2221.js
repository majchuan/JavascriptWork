/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    
    while(nums.length > 1){
        const length = nums.length ; 
        for(let i = 0 ; i< length - 1; i++){
            const sum = (nums[i] + nums[i+1] ) % 10; 
            nums.push(sum);
        }

        nums = nums.slice(length);
        //console.log(nums);
    }

    return nums[0];
};