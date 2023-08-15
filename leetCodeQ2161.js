/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
/*
*Two Pointers
*/
var pivotArrayTwoPointers = function(nums, pivot) {
    const result = [];
    let left = 0 , right = nums.length -1;
    let before = 0 ;
    let after = nums.length -1;

    while(left < nums.length && right >=0){
        if(nums[left] < pivot){
            result[before] = nums[left];
            before++;
        }

        if(nums[right] > pivot){
            result[after] = nums[right];
            after--;
        }

        left++;
        right--;
    }

    for(let i = before ; i <= after; i++){
        result[i]=pivot;
    }

    return result;
};


/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const leftNums = [];
    const rightNums =[];
    const pivots = [];

    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] < pivot){
            leftNums.push(nums[i]);
        }

        if(nums[i] == pivot){
            pivots.push(nums[i]);
        }

        if(nums[i] > pivot){
            rightNums.push(nums[i]);
        }
    }

    return [...leftNums, ...pivots, ...rightNums];
};

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArrayTwoPointers = function(nums, pivot) {
    const result = [];
    let left = 0 , right = nums.length -1;
    let before = 0 ;
    let after = nums.length -1;

    while(left < nums.length && right >=0){
        if(nums[left] < pivot){
            result[before] = nums[left];
            before++;
        }

        if(nums[right] > pivot){
            result[after] = nums[right];
            after--;
        }

        left++;
        right--;
    }

    for(let i = before ; i <= after; i++){
        result[i]=pivot;
    }

    return result;
};