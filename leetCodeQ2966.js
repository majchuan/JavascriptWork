/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] > k) return [];
        result.push([nums[i], nums[i + 1], nums[i + 2]]);
    }

    return result;

};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArraySecondApproach = function(nums, k) {
    nums.sort((a,b) => a - b);
    const result = [];
    let subNums = [];
    for(let i = 0 ; i < nums.length ; i++){
        if(subNums.length ==0  || subNums.length < 3){
            if(subNums.length == 0){
                subNums.push(nums[i]);
            }else if(subNums.length < 3){
                if(nums[i] - nums[i-1] <= k){
                    subNums.push(nums[i]);
                }
            }
        }

        if(subNums.length == 3){
            if(subNums[subNums.length-1] - subNums[0] <= k){
                result.push(subNums);
            }
            subNums=[];
        }
    }

    return result.length == nums.length / 3 ? result : [] ;

};