/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if(nums.length < 2 ) return nums.length;

    const up = [1];
    const down = [1];

    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] > nums[i-1]){
            up[i]= down[i-1]+1;
            down[i] = down[i-1];
        }else if (nums[i] < nums[i-1]){
            down[i] = up[i-1] + 1 ;
            up[i] = up[i-1];
        }else{
            up[i] = up[i-1];
            down[i] = down[i-1];
        }
    }

    return Math.max(up[up.length -1], down[down.length -1]);
};
