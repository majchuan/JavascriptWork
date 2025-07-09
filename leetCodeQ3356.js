/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    let left = 0 ; 
    let right = queries.length;

    if(checkNumsZero(nums, queries, right) == false) return -1;

    while(left <= right){
        let middle = Math.floor((left + right)/2);
        if(checkNumsZero(nums,queries,middle)){
            right = middle -1;
        }else{
            left = middle+1;
        }
    }
    return left;
};

const checkNumsZero=(nums, queries, k) =>{
    let n = nums.length;
    let sum = 0;
    const newNums = new Array(n+1).fill(0);

    for(let i = 0 ; i < k ; i++){
        let [left, right, value] = queries[i];
        newNums[left] += value;
        newNums[right+1] -=value;
    }

    for(let i =0 ; i < n ; i++){
        sum += newNums[i];
        if(sum < nums[i]) return false;
    }

    return true;

}
