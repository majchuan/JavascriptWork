/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
*an algorithm that runs in O(n) time and uses only constant extra space.
*/
 var findDuplicates = function(nums) {
    const result =[];
    
    for(let i = 0 ; i < nums.length; i++){
        while(nums[i] != nums[nums[i]-1]){
            let temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
        }
    }
    
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] != i+1){
            result.push(nums[i]);
        }
    }
    
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicatesHashTable = function(nums) {
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


const findDuplicates2 = (nums) => {
    const duplicates = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        
        if (nums[index] < 0) {
            duplicates.push(index + 1);
        }

        nums[index] = nums[index] * -1;
    }

    return duplicates;
};