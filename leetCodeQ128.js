/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((x,y) => x -y);

    nums = [...new Set(nums)];
    
    const dp = [];
    let maxConsecutiveLength = 0 ;
    
    for(let i =0; i < nums.length; i++){
        if(dp.length == 0) {
            dp.push(nums[i]);
        }else{
            
            if(nums[i] - dp[dp.length-1] == 1){
                dp.push(nums[i]);
            }else{
                maxConsecutiveLength = Math.max(maxConsecutiveLength, dp.length);
                dp.splice(0,dp.length);
                dp.push(nums[i]);
            }
        }
    }
    maxConsecutiveLength = Math.max(maxConsecutiveLength, dp.length);
    return maxConsecutiveLength;
};

const nums=[0,3,7,2,5,8,4,6,0,1];
const nums1 = [100,4,200,1,3,2];
const nums2 = [1,2,0,1]
console.log(longestConsecutive(nums));