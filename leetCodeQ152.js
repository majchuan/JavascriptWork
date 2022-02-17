/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let currMax = 1 ;
  let currMin = 1 ;
  let result = Number.MIN_SAFE_INTEGER;

  for(let num of nums){
      if(num < 0){
          let temp = currMax;
          currMax = currMin;
          currMin = temp;
      }

      currMax = Math.max(num, num * currMax);
      currMin = Math.min(num, num * currMin);
      result = Math.max(result,currMax,currMin);
  }

  return result;
};

const nums= [2,3,-2,4]
console.log(maxProduct(nums));