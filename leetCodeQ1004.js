/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
    let left = 0, right = 0 , counter_0 = 0;
    let maxSum = 0;
    while(right < nums.length){
        if(nums[right] == 0){
            counter_0++;
        }

        if(counter_0 > k ){

            if(nums[left] == 0) {
                counter_0--;
            }
            maxSum = Math.max(maxSum, right - left)
            left++
        }
        right++;
    }
    maxSum =Math.max(maxSum, right - left);
    return maxSum;
};

const nums= [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3;
const nums1=[1,1,1,0,0,0,1,1,1,1,0], k1 = 2;
const nums2 =[1,1,1,0,0,0,1,1,1,1], k2 =0;
console.log(longestOnes(nums1,k1));

const miniNumber =Number.MIN_SAFE_INTEGER