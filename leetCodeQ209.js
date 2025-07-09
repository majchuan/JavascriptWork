/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/*
*Sliding windows
*/
var minSubArrayLen = function(target, nums) {
    let left = 0 , right = 0 ;
    let sum = 0 ;
    let minLength = Number.MAX_SAFE_INTEGER ;

    while(right < nums.length){
        sum += nums[right];

        while(sum >= target){
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }

        right++;
    }

    return minLength == Number.MAX_SAFE_INTEGER ? 0 : minLength;
};

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLenSlowApproach = function(target, nums) {
    let start  = 0, end = 0 ;
    let sumOfNums = 0 ;
    const minSubArray={
        len : Number.MAX_SAFE_INTEGER ,
        data : []
    }
    
    while(start < nums.length && end < nums.length){
        sumOfNums += nums[end] ; 
        if(sumOfNums >= target){
            while(sumOfNums >= target){
                if(sumOfNums >= target){
                    if((end - start+1) < minSubArray.len){
                        minSubArray.len = end - start + 1 ;
                        minSubArray.data = nums.slice(start, end+1);
                    }
                }
                sumOfNums -= nums[start];
                start++;
            }
        }
        end++;
    }
    
    return minSubArray.data.length;
};

const target = 7, nums = [2,3,1,2,4,3];
const target1 = 4, nums1 = [1,4,4];
const target2 = 11, nums2 = [1,1,1,1,1,1,1,1];
const target3 = 7, nums3 = [2,3,1,2,4,3];
const target4 =11 , nums4 =[1,2,3,4,5];
console.log(minSubArrayLen(target4, nums4));