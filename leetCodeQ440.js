/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    let current = 1;
    k--;
  
    while (k > 0) {
      let steps = countSteps(n, current, current + 1);
      if (steps <= k) {
        current += 1;
        k -= steps;
      } else {
        current *= 10;
        k--;
      }
    }
  
    return current;
  };
  
  function countSteps(n, current, next) {
    let steps = 0;
  
    while (current <= n) {
      steps += Math.min(n + 1, next) - current;
      current *= 10;
      next *= 10;
    }
  
    return steps;
  }
  