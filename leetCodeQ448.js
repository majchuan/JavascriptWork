/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result = [];
    for(let i = 0 ; i < nums.length ; i++){
        while(nums[i] != nums[nums[i]-1]){
            let temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i]=temp;
        }
    }

    for(let i = 0 ; i < nums.length ;i++){
        if(nums[i] != i+1){
            result.push(i+1);
        }
    }

    return result;
};