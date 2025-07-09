/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    let difference = 0 ;
    let maxLength = 1;
    const hash_nums ={}
    for(let i = 0 ; i < nums.length ; ++i){
        hash_nums[i] = {}
        for(let j = 0 ; j < i ; ++j){
            difference = nums[j] - nums[i];
            if(hash_nums[j][difference]){
                hash_nums[i][difference] = hash_nums[j][difference]  + 1 ;
            }else{
                hash_nums[i][difference] = 2 ;
            }

            maxLength = Math.max(maxLength, hash_nums[i][difference]);
        }
    }
    return maxLength;
};



console.log(5+ +"6");