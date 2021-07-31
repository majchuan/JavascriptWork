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



const nums = [1,0,1,0,1], goal = 2 ;
console.log(numSubarraysWithSum(nums,goal));