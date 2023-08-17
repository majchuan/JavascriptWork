/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  
    const result = [];
    const maxIndexs= [];
    
    for(let i = 0 ; i < nums.length ; i++){
      while(maxIndexs.length > 0 && nums[i] > nums[maxIndexs[maxIndexs.length-1]]){
        maxIndexs.pop();
      }
  
      maxIndexs.push(i);
  
      if(maxIndexs[0]  + k <= i  ){
        maxIndexs.shift();
      }
  
      if( i + 1 >= k){
        result.push(nums[maxIndexs[0]]);
      }
    }
  
    return result;
  
  };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindowSlow = function(nums, k) {

    /*
        const result = [];
        for(let i = 0 ; i <= nums.length - k ; i++){
            let maxNum = Math.max(...nums.slice(i, i+k));
            result.push(maxNum);
        }  
    
        return result;
    */
    let result = [];
  
    for (let i = 0; i <= nums.length -k; i++) {
        let max = nums[i]
        for (let j = i+1; j < i+k; j++) {
            max = Math.max(max , nums[j])
        }
        result.push(max)
    }
    return result;
};