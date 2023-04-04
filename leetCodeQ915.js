/**
 * @param {number[]} nums
 * @return {number}
 */
/*
*nums = [5,0,3,8,6]
*First find biggest value from left sub array, for example maxLeft[1] is the max value of subarray [5,0], so for next subarray maxLeft[2] is the biggest value
*for subarray[5,0,3] => max(nums[4]) = max(max(nums[3]), nums[3]), so maxLeft[4]= max(max_left[3],nums[4]);
*simillar minRight for every possible right smallest value from right size.
*now we only neeed compare the maxLeft and minRight until find out maxLeft[i-1] < minRight[i], and return i;
**/
var partitionDisjoint = function(nums) {
    const maxLeft = [nums[0]];
    const minRight = [];
    minRight[nums.length -1] = nums[nums.length -1];

    for(let i =1 ; i < nums.length ; i++){
        maxLeft[i] = Math.max(maxLeft[i-1], nums[i]);
    }

    //console.log(maxLeft);

    for(let i = nums.length -2 ; i >=0; i--){
        minRight[i] = Math.min(minRight[i+1], nums[i]);
    }

    //console.log(minRight);

    for(let i= 1; i< nums.length; i++){
        if(maxLeft[i-1] <= minRight[i]){
            return i;
        }
    }

    return  -1 ;
};