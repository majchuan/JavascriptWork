/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    if(new Set(nums) == nums.length) return 0;

    let count = 0 ;
    while(true && nums.length > 0){
        if(nums.length > 3){
            if(new Set(nums).size == nums.length){
                return count;
            }else{
                count+=1;
                for(let i = 0 ; i < 3; i++){
                    nums.shift();
                }
            }
        }else{
            if(new Set(nums).size == nums.length){
                return count;
            }else{
                count+=1;
                for(let i = 0 ; i < nums.length ; i++){
                    nums.shift();
                }
            }
        }
    }

    return count;
};
