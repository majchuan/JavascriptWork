/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const result = [];
    for(let num of nums){
        num.sort((a,b)=> a-b);
    }

    const firstNum = nums[0];

    firstNum.forEach((item) =>{
        if(nums.every((num)=> num.includes(item))){
            result.push(item);
        }
    });
    return result;
  
};
