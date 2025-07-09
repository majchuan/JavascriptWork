/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
    if(nums.length < 3){
        return 0 ;
    }
    
    let result = 0 , dp = 0 ;
    
    for(let i = 1 ; i < nums.length-1; i++){
        if(nums[i+1] - nums[i] == nums[i] - nums[i-1]){
            dp++;
            result += dp;
        }else{
            dp = 0;
        }
    }
    
    return result;
};

const nums =[1,2,3,4,5]
console.log(numberOfArithmeticSlices(nums));