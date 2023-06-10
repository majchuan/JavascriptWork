/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
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