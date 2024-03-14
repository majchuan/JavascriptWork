/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let sum = 0;
    let hash_nums={0:1};
    let counter = 0;
    for(let item of nums){
        sum+=item;
        if(hash_nums[sum - goal]){
            counter +=hash_nums[sum - goal];
        }
        if(hash_nums[sum] == null){
            hash_nums[sum] = 1;
        }else{
            hash_nums[sum] = hash_nums[sum] + 1 ;
        }


    }

    return counter ;
};


/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSumSlidingWindowApproach = function(nums, goal) {
    return slidingWindow(nums, goal) - slidingWindow(nums, goal-1);
};

const slidingWindow = (nums, goal) =>{
    let left = 0 ;
    let right = 0; 
    let sum = 0 ;
    let count = 0;

    while(right < nums.length){
        sum += nums[right];

        while(left <= right && sum > goal){
            sum -= nums[left];
            left++;
        }

        count += right - left + 1;
        right++;
    }

    return count;
}


const nums = [1,0,1,0,1], goal = 2 ;
console.log(numSubarraysWithSum(nums,goal));

