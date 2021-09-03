/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElementBigO_logN = function(nums){
    let left = 0 , right = nums.length-1;
    if(nums.length == 1) return 0;
    while(left <= right){
        let midIndex = Math.floor((left+right)/2);
        if(nums[midIndex-1] < nums[midIndex] && nums[midIndex] > nums[midIndex+1]){
            return midIndex;
        }else if(nums[midIndex] < nums[midIndex+1]){
            left = midIndex+1;
        }else{
            right =midIndex-1;
        }
    }

    return left;
}

 var findPeakElementBigO_n = function(nums) {
    if(nums[0] > nums[1]){
        return 0;
    }
    if(nums[nums.length-1] > nums[nums.length-2]){
        return nums.length -1 ;
    }
    for(let i = 1 ; i < nums.length-1 ; i++){
        if(nums[i-1]< nums[i] && nums[i] > nums[i+1]){
            return i;
        }
    }
    
    return null;
};