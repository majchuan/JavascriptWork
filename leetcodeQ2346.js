/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let zeros = 0 ;
    let occurrences = 0 ;
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] == 0){
            zeros++;
            if(nums[i+1] != 0){
                occurrences += cal(zeros);
                zeros = 0 ;
            }
        }
    }

    return occurrences;
};

const cal =(zeros) =>{
    return (1+zeros)*zeros / 2;
}