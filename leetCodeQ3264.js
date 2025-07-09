/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalStateFastApproach = function(nums, k, multiplier) {
    for (let i=1; i<=k; i++){
        m = Math.min(...nums)
        index = nums.indexOf(m)
        nums[index] = m * multiplier
    }
    return nums
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    const num_indexs = [];
    for(let i = 0 ; i < nums.length; i++){
        num_indexs.push([nums[i],i]);
    }

    for(let i = 0 ; i < k ; i++){
        num_indexs.sort((a,b) => {
            if(a[0] == b[0]){
                return a[1] - b[1];
            }else{
                return a[0]-b[0];
            }
        });
        num_indexs[0][0] *= multiplier;
        nums[num_indexs[0][1]] *= multiplier;
    }

    return nums;
};