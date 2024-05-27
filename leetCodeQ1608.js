/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a,b)=> a - b);
    let n = nums.length;

    for(let i = 1 ; i <= n ; i++){
        let k = getFirstGreatOrEqualNumber(nums,i);
        if(n - k == i) return i;
    }

    return -1;
};

const getFirstGreatOrEqualNumber=(nums, target)=>{
    let left = 0;
    let right = nums.length - 1;

    let index = nums.length;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] >= target){
            index = mid;
            right = mid-1;
        }else{
            left = mid +1;
        }
    }

    return index;
}
