/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAbsoluteSum = function(nums) {
    if(nums.length == 0) return 0 ;
    if(nums.length == 1) return Math.abs(nums[0]);
    
    let maxSum = Number.MIN_SAFE_INTEGER;
    let minSum = Number.MAX_SAFE_INTEGER;
    let currentMax = 0;
    let currentMin = 0;
    for(let i = 0; i < nums.length; i++){
        currentMax += nums[i];
        currentMax = Math.max(currentMax, nums[i]);
        maxSum = Math.max(maxSum, currentMax);
        console.log("maxSum", maxSum);
    }
    
    for(let i = 0; i < nums.length; i++){
        currentMin += nums[i];
        currentMin = Math.min(currentMin, nums[i]);
        minSum = Math.min(minSum, currentMin);
        //console.log("minSum", minSum);
    }
    
    console.log(maxSum, minSum);
    
    return Math.max(Math.abs(maxSum), Math.abs(minSum));
};

const maxAbsoluteSumDP = (nums) =>{
    const dpMax = new Array(nums.length).fill(0);
    const dpMin = new Array(nums.length).fill(0);
    let maxSum = Number.MIN_SAFE_INTEGER;
    let minSum = Number.MAX_SAFE_INTEGER;

    dpMax[0] = nums[0];
    for(let i = 1 ; i < nums.length; i++){
        if(dpMax[i-1] > 0){
            dpMax[i] = dpMax[i-1] + nums[i];
        }else{
            dpMax[i] = nums[i];
        }

        maxSum = Math.max(maxSum, dpMax[i]);
    }
    console.log(dpMax);

    dpMin[0] = nums[0];
    for(let i = 1 ; i < nums.length; i++){
        if(dpMin[i-1] < 0){
            dpMin[i] = dpMin[i-1] + nums[i];
        }else{
            dpMin[i] = nums[i];
        }

        minSum = Math.min(minSum, dpMin[i]);
    }

    console.log(dpMin, maxSum,minSum);

    return Math.max(maxSum, Math.abs(minSum));
}

const nums = [2,-5,1,-4,3,-2];
console.log(maxAbsoluteSumDP(nums));