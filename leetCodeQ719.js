/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**Bucket Sort */
var smallestDistancePair = function(nums, k) {
    nums.sort((a,b)=> a - b);   
    const maxElement = Math.max(...nums);
    const result = new Array(maxElement+1).fill(0);

    for(let i = 0 ; i < nums.length ; i++){
        for(let j  = i+1 ; j < nums.length ; j++){
            result[nums[j] - nums[i]]++;
        }
    }

    for(let i = 0 ; i < maxElement ; i++){
        k -= result[i];
        if(k <= 0) return i;
    }

    return -1;
};