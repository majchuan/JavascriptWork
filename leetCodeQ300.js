/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {   
    if (nums === null || nums.length===0) return 0;

    if (nums.length === 1) return 1;

    let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    
    for (let i=0; i<nums.length; i++){
        let pos = binarySearchPosition(dp, nums[i], i);
        dp[pos] = nums[i];
    }
    console.log(dp);
    for (let i = dp.length-1; i >= 0; i--){
        if (dp[i] !== Number.MAX_SAFE_INTEGER) return i+1;
    }
    
    return 0;
};

const binarySearchPosition = (dp, target, hi) => {
    let lo = 0;
    while (lo <= hi) {
        let mid = Math.floor((lo+hi)/2);
        if (target === dp[mid]) return mid;
        else if (target < dp[mid]) hi = mid-1;
        else lo = mid+1;
    }
    return lo;
}
var lengthOfLISDP = function(nums) {
    const dp= new Array(nums.length).fill(1);
    for(let i = 1 ; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                console.log(nums[i], nums[j]);
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log(dp);
    return dp.sort((x,y) => y-x)[0];
};


const nums=[10,9,2,5,3,7,101,18];
console.log(lengthOfLISDPDP(nums));