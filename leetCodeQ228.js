/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const result = [];
  let j = 0 ;
  for(let i = 0 ; i < nums.length; i++){
      if(nums[i+1] - nums[i] != 1 ){
          if(j != i){
              result.push(nums[j].toString() +"->" + nums[i].toString());
          }else{
              result.push(nums[i].toString());
          }
          j = i + 1;
      }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRangesSlowApproach = function(nums) {
    const result = [];
    for (let i = 0, left = nums[0]; i < nums.length; i++) {
      if (nums[i] + 1 !== nums[i + 1]) {
        result.push(left === nums[i] ? '' + nums[i] : left + '->' + nums[i]);
        left = nums[i + 1];
      }
    }
    return result;
};