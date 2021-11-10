/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minBuyStockPrice = prices[0];
    let maxProfit = 0;
    for(let i =1 ; i < prices.length ; i++){
        minBuyStockPrice =Math.min(prices[i], minBuyStockPrice);
        maxProfit = Math.max(maxProfit, prices[i] - minBuyStockPrice);
    }
    return maxProfit
};

const maxArraySum = (nums) =>{
    let sum = 0 ;
    let totalMaxSum = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++){
        sum = Math.max(nums[i], nums[i] + sum);
        totalMaxSum = Math.max(totalMaxSum, sum);
    }

    return totalMaxSum;
}

const nums = [-2,1,-3,4,-1,2,1,-5,4];
//console.log(maxArraySum(nums));

const maximumDifference=(nums) => {
    let minNum = nums[0];
    let maxDifference = -1;
    for(let i = 1; i < nums.length; i++){
        minNum = Math.min(nums[i], minNum);
        maxDifference = Math.max(maxDifference, nums[i]-minNum);
    }

    return maxDifference == 0? -1 : maxDifference ; 
}

const nums1=[7,1,5,4];
const nums2=[9,4,3,2];
console.log(maximumDifference(nums1));