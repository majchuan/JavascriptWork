/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(numbers, target) {
    let left = 0 ;
    let right = numbers.length - 1 ;
    while(left <= right){
        const sum = numbers[left] + numbers[right];
        if(sum == target){
            return [left+1, right+1];
        }
        
        if(sum > target){
            right--;
        }else{
            left++;
        }
    }
    
    return null;
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/*
*Your solution will not use constant space.
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