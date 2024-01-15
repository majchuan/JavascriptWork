/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const result = [];
    let index = 0 ;
    let counter = 0 ;
    const hash_used = {};

    while(true){
        const hash_nums={}
        for(let i = 0 ; i < nums.length ; i++){
            if(hash_nums[nums[i]] == null && hash_used[i] == null){
                hash_nums[nums[i]] = index; 
                hash_used[i] = true;
            }
        }

        result[index] = [...Object.keys(hash_nums)];
        counter += result[index].length;
        index++;
        if(counter == nums.length) break; 
    }

    return result;
};