/**
 * @param {number[]} stones
 * @return {number}
 */
var twoSumLessThanK = function(nums,k) {
    let left = 0;
    let right = nums.length -1;
    let maxTwoSumLessThanK = Number.MIN_SAFE_INTEGER;
    //nums.sort((x,y) => x-y);
    quickSort(nums, 0, nums.length-1);
    console.log(nums);
    while(left < right){
        const sum = nums[left]+nums[right];
        if(sum > k){
            right--;
        }
        if(sum < k){
            maxTwoSumLessThanK = Math.max(maxTwoSumLessThanK, sum);
            left++;
        }
    }

    return maxTwoSumLessThanK;
};

const quickSort=(nums,left, right)=>{
    if(left < right){
        const partitionIndex = partionElement(nums,left ,right);
        quickSort(nums, left, partitionIndex-1);
        quickSort(nums, partitionIndex+1, right);
    }
    return nums;
}

const partionElement =(nums, left, right) =>{
    const pivot = nums[right];
    let swapIndex = left - 1;
    for(let i = left ; i <= right ; i++){
        if(nums[i] < pivot){
            swapIndex++;
            [nums[swapIndex], nums[i]] = [nums[i], nums[swapIndex]];
        }
    }

    [nums[swapIndex+1],nums[right]] = [nums[right], nums[swapIndex+1]];

    return swapIndex+1;
}

const nums = [34,23,1,24,75,33,54,8], k = 60;

console.log(twoSumLessThanK(nums,k));