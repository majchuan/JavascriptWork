/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
/*
To solve this problem lets suppose answer exists

in this case sum of middle subarray will be equal to totalSum-x

I have to minimixe the left and right element of a array thats meanwe have to maximize the number element of a subarray which present in the array which sum equal to tatolSum-x
[...left , totalSum -x , ...right];

To find the max middle subarray element or length

we will use sliding window technique/two pointer approach

initially we will set left and right pointer at 0 index
We will move right pointer until CurrSum > totalSum - x
if CurrSum > totalSum - x we will move left pointer and also check the condition that l<=r
Update our maxLength if and only if currSum == totalSum - x
Repeat the above steps until we reach the end of the array.
At last if we did not find any such window we will return -1 as answer

*/
 var minOperations = function(nums, x) {
    let target = - x;
    for(const n of nums) {
        target += n;
    }
    if(target === 0) {
        return nums.length;
    }    
    if(target < 0) return -1;
    
    let left = 0;
    let right = 0;
    let size = -1;
    let sum = 0;
    
    while(right < nums.length && left <= right) {    
        sum += nums[right];
        while(sum > target) {
            sum -= nums[left];
            left++;
        }
        if(sum === target){
            size = Math.max(size, right - left + 1);
        }
        right++;
    }
    
    return size === -1 ? -1 : nums.length - size;
};

const nums=[8828,9581,49,9818,9974,9869,9991,10000,10000,10000,9999,9993,9904,8819,1231,6309], x= 134365;
const nums1 =[5207,5594,477,6938,8010,7606,2356,6349,3970,751,5997,6114,9903,3859,6900,7722,2378,
    1996,8902,228,4461,90,7321,7893,4879,9987,1146,8177,1073,7254,5088,402,4266,6443,3084,1403,5357,
    2565,3470,3639,9468,8932,3119,5839,8008,2712,2735,825,4236,3703,2711,530,9630,1521,2174,5027,4833,
    3483,445,8300,3194,8784,279,3097,1491,9864,4992,6164,2043,5364,9192,9649,9944,7230,7224,585,3722,
    5628,4833,8379,3967,5649,2554,5828,4331,3547,7847,5433,3394,4968,9983,3540,9224,6216,9665,8070,31,3555,
    4198,2626,9553,9724,4503,1951,9980,3975,6025,8928,2952,911,3674,6620,3745,6548,4985,5206,5777,1908,6029,
    2322,2626,2188,5639], x1= 565610;
const nums2 = [3,2,20,1,1,3], x2 = 10
console.log(minOperations(nums2,x2));