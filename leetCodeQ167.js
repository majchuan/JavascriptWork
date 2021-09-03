/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    hash_nums ={};
    for(let i = 0 ; i < numbers.length ; i++){
        if(hash_nums[target - numbers[i]] != null){
            return [hash_nums[target - numbers[i]], i+1];
        }else{
            hash_nums[numbers[i]] = i+1 ;
        }
    }
    
    return null;
};