/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    let n = nums.length;
    let largestPrime = 0;
  
    // Check the main diagonal
    for (let i = 0; i < n; i++) {
      if (isPrime(nums[i][i]) && nums[i][i] > largestPrime) {
        largestPrime = nums[i][i];
      }
    }
  
    // Check the secondary diagonal
    for (let i = 0; i < n; i++) {
      if (isPrime(nums[i][n - 1 - i]) && nums[i][n - 1 - i] > largestPrime) {
        largestPrime = nums[i][n - 1 - i];
      }
    }
  
    return largestPrime;
  };
  
  //Seprate function for checkiing prime number
const isPrime=(num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= (num**0.5); i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return true;
}