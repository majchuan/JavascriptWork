/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    let result = 0 ;
    nums.sort((a,b) => b -a );

    let right = 1;

    while(right < nums.length){
        let ans = 0 ;
        if(nums[right] != nums[right -1]){
            ans =right;
        }

        result += ans ;
        right++;
    }

    return result ; 
};