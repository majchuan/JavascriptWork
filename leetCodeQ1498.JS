/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    let pows = [];
    pows.push(1);
    nums.sort((x,y) => x -y);

    const mod = 1e9+7;
    for(let i = 1; i < nums.length ; i++){
        pows.push(pows[pows.length -1] * 2 % mod);
    }

    let left = 0, right = nums.length -1; 
    let count = 0;

    while(left <= right){
        if(nums[left] + nums[right] <= target){
            count += pows[right-left];
            count = count % mod;
            left++;
        }else{
            right--
        }
    }

    return count;
};