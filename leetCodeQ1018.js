/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const result = [];

    let num = 0 ;

    for(let i = 0 ; i < nums.length ; i++)
    {
        num = (num * 2 + nums[i]) % 5;

        if(num % 5 == 0){
            result.push(true);
        }else{
            result.push(false);
        }
    }

    return result;
};
