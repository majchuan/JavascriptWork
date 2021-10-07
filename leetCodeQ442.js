/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    const nums_hash={};
    const duplicateNums = [];
    for(let num of nums){
        if(nums_hash[num]){
            nums_hash[num] +=1;
            duplicateNums.push(num);
        }else{
            nums_hash[num] = 1 ;
        }
    }
    
    return duplicateNums;
};