/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps = 0 , currIndex = 0 , maxJumps = 0 ;
    for(let i = 0 ; i < nums.length - 1  ; i++){
        maxJumps = Math.max(maxJumps, i + nums[i]);
        if(i == currIndex){
            steps++;
            currIndex = maxJumps;
        }
    }
    return steps;
};