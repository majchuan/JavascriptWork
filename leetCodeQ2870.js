/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const hash_nums = {};
    let result = 0 ;
    for(let num of nums){
        hash_nums[num] ? hash_nums[num]++ : hash_nums[num] = 1 ;
    }

    for(let key in hash_nums){
        if(hash_nums[key] == 1) return -1;
        result += Math.ceil(hash_nums[key] / 3);
    }

    return result; 
};

var minOperationsExplainMath = function (nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      map.set(num, (map.get(num) ?? 0) + 1);
    }
    let ops = 0;
    /**
     * freq % 3 === 0 - all 3s
     * freq % 3 === 2 - subtract a 2, then all threes
     * freq % 3 === 1 - ???
     * 4, two 2's. 7, two 2's and a three. 10, two 2's and 2 threes
     */
    for (const [num, freq] of map.entries()) {
      if (freq === 1) {
        return -1;
      }
      if (freq === 2 || freq === 3) {
        ops += 1;
      } else if (freq % 3 === 0) {
        ops += Math.floor(freq / 3);
      } else if (freq % 3 === 2) {
        ops += 1; // subtract the 2
        ops += Math.floor((freq - 2) / 3);
      } else if (freq % 3 === 1) {
        ops += 2; // subtract two 2's.
        const f = freq - 4;
        ops += Math.floor(f / 3);
      }
      // scenarios
    }
    return ops;
  }


  /**
 * @param {number[]} nums
 * @return {number}
 */
var minOperationsBrutalForce = function(nums) {
    const hash_nums = {};
    let result = 0 ;
    for(let num of nums){
        hash_nums[num] ? hash_nums[num]++ : hash_nums[num] = 1 ;
    }

    for(let key in hash_nums){
        if(hash_nums[key] == 1) return -1;
        if(hash_nums[key] % 2 == 0 && hash_nums[key] % 3 != 0){
            result += checkMinSteps(hash_nums[key], hash_nums[key] / 2, 0);
        }else if(hash_nums[key] % 3 == 0){
            result += hash_nums[key] / 3; 
        }else if(hash_nums[key] % 2 != 0 && hash_nums[key] % 3 != 0){
            result += checkMinSteps(hash_nums[key], -1 , 0);
        }
    }

    return result; 
};

const checkMinSteps =(num, step, num2) =>{
    if(num == 0){
        return step;
    }

    num -= 2;
    num2++;
    if(num % 3 == 0){
        step = num / 3 + num2;
        return step;
    }

    return checkMinSteps(num, step, num2);
}