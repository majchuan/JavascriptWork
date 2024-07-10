/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const nums = new Array(n);
    for(let i = 0 ; i < n ; i++){
        nums[i] = i + 1 ;
    }
    let index=0;
    while(nums.length > 1){
        let removeIndex = (index + k - 1) % nums.length;
        nums.splice(removeIndex,1);
        index = removeIndex;
    }
    return nums[0];
};