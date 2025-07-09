/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a,b) => a -b);

    return twoPointSearch(nums, upper+1) - twoPointSearch(nums, lower);
};

const twoPointSearch= (nums, value) =>{
    let left = 0 ;
    let right = nums.length -1;

    let counter = 0 ;

    while(left < right){
        let sum = nums[left] + nums[right];

        if(sum < value){
            counter += right - left;
            left++;
        }else{
            right--;
        }
    }

    return counter;
}