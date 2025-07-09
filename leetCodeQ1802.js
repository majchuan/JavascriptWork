/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
/*
Define the min and max possible values of nums[index] as Math.floor(maxSum/n) and maxSum respectively.
Create 2 helper functions, findSum and isWithin.
findSum will find the sum of an arithmetic progression of length len starting with the largest number num.
isWithin will return whether the sum is within maxSum or not.
Perform binary search and check whether the midpoint of min and max is within maxSum or not. If isWithin(mid) === true then min = mid + 1, else max = mid - 1.
Once the binary search is complete, return max.
Notes on findSum:

We have to consider two scenarios. If len < num, we can use the arithmetic formula normally, else we have to consider the trailing 1's.
Example, findSum(10, 3) means we find the sum of 10 + 9 + 8 whereas findSum(3, 5) means finding the sum of 3 + 2 + 1 + 1 + 1.
The formula for arithmetic progression is length of series * (largest number + smallest number) / 2
For the case of len < num, we get len * ( (num) + (num - len + 1) ) / 2.
For the case of len > num, we get num * ( num + 1 ) / 2 + (len - num) where (len - num) accounts for the trailing 1's.
If len === num, either formula is fine as (len - num) will cancel out.
*/
var maxValue = function(n, index, maxSum) {
    let left = 1 , right = maxSum ;
    const findSum = (num, len) => {
        if (len < num) {
            return len * (num + num - len + 1) / 2;
        } 
        return num * (num + 1) / 2 + (len - num);
    }

    while (left <= right) {
        const mid = Math.floor((left + right)/2);
        const leftSum = findSum(mid, index + 1);
        const rightSum = findSum(mid, n - index);
        if(maxSum == leftSum + rightSum - mid) return mid;
        if(maxSum > leftSum + rightSum - mid){
            left = mid + 1
        }else{
            right = mid - 1 ;
        }
    }
    return right;

};