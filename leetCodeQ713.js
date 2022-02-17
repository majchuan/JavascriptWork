/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
    let left = 0;
    let right = 0 ;
    let product = 1 ;
    let counter = 0;
    while(right < nums.length){
        product*= nums[right];
        
        while(left <= right && product >= k){
            product = product / nums[left];
            left++;
        }
        
        counter += right - left +1 ;
        
        right++;
    }
    
    return counter;
};


const nums1 = [10,5,2,6], k1 = 100;
const nums=[2,1,4,9,6,5,10,5,6,1,7,10,2,3,10], k =423;
console.log(numSubarrayProductLessThanK(nums1,k1));