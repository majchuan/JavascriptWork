/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    nums.sort((a,b) => a-b);
    let left = 0; 
    let right = nums[nums.length -1] - nums[left];

    while(left < right){
        let mid = Math.floor((left  + right)/2);
        if(checkPairs(nums, mid) >= p){
            right = mid;
        }else{
            left = mid+1;
        }
    }

    return left;
};

const checkPairs = (nums, minDiff) =>{
    let count = 0;
    for(let i = 0 ; i < nums.length-1 ; i++){
        if(nums[i+1] - nums[i] <= minDiff){
            count++;
            i++;
        }
    }

    return count;
}