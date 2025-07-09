/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    const set = new Set();
    for (const num of banned) {
        set.add(num);
    }

    let count = 0, sum = 0;
    for (let i = 1; i <= n; ++i) {
        if (!set.has(i) && sum + i <= maxSum) {
            count++;
            sum += i;
        }
    }
    return count;
};


/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCountBinarySearch = function(banned, n, maxSum) {
    banned.sort((a,b) => a - b);
    let count = 0 ; 
    for(let i = 1 ; i <= n ; i++){
        if(binarySearch(banned, i)) continue;

        maxSum -= i;

        if(maxSum < 0) break;

        count++;
    }

    return count;
};

const binarySearch=(nums, target) =>{
    let left = 0;
    let right = nums.length -1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] == target) return true;

        if(nums[mid] > target){
            right = mid -1 ;
        }else{
            left = mid+1;
        }
    }

    return false;
}