/*
Since we want to match all the substrings of the given two arrays, we can use a two-dimensional array to store our results. 
The lengths of the two arrays will define the size of the two dimensions of the array. 
So for every index ‘i’ in array A and ‘j’ in array 'B, we have two options:
If the character/ value at A[i] matches B[j], the length of the common substring would be one plus the length of the common array till i-1 and j-1 indexes 
in the two arrays.
If the character/ value at the A[i] does not match B[j], we don’t have any common value.
So our recursive formula would be:
*/
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    const dp = Array(A.length + 1)
     .fill(0)
     .map(() => Array(B.length + 1).fill(0));
 
   let maxLength = 0;
   for (let i = 1; i <= A.length; i++) {
     for (let j = 1; j <= B.length; j++) {
       if (A[i - 1] ==B[j - 1]) {
         dp[i][j] = 1 + dp[i - 1][j - 1];
         maxLength = Math.max(maxLength, dp[i][j]);
       }
     }
   }
   return maxLength;
 };

const nums1 = [0,0,0,0,1], nums2 = [1,0,0,0,0];
const nums3 = [0,1,1,1,1], nums4 = [1,0,1,0,1];
console.log(findLength(nums1,nums2));