/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let currentMax = 0;
    
    for(let i = 0; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        max = Math.max(currentMax, max);               
    }
    
    return max;
};

var maxSubArrayDP = function(nums) {
    const dp = new Array(nums.length).fill(0);
    if(nums.length == 0) return 0;
    if(nums.length == 1) return nums[0];
    dp[0] = nums[0];
    let res = nums[0];
    for(let i = 1; i< nums.length ; i++){
        if(dp[i-1] > 0){
            dp[i] = dp[i-1] + nums[i];
        }else{
            dp[i] = nums[i]
        }
        //console.log(res, dp[i])
        res = Math.max(res, dp[i]);
    }
    
    return res;
};


const nums =[-2,1,-3,4,-1,2,1,-5,4];

//console.log([-1].reduce((x,y) => x+y,0));

var maxSubArray1 = function(nums) {
    let totalSum = Number.MIN_SAFE_INTEGER ;
    if (nums.length == 1) return nums[0];
    
    for(let i = 0 ; i < nums.length; i++){
        for(let j = nums.length; j > i ; j--){
            let sum = nums.slice(i,j).reduce((x,y) => x+y,0);
            console.log(sum);
            if(totalSum < sum){
                totalSum = sum ;
            }
        }
    }
    
    return totalSum;
};

const nums1 =[];
//console.log(maxSubArray1(nums1));

const nums2=[2,1,4,9,3];
console.log(maxSubArray1(nums2));