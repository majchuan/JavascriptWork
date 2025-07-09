/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const hash_nums={};
    let count = 0;
    for(let i = 0 ; i < nums.length; i++){
        if(hash_nums[nums[i]] != null){
            count += hash_nums[nums[i]];
            hash_nums[nums[i]] += 1 ;
        }else{
            hash_nums[nums[i]] = 1 ;
        }
    }

    return count;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairsSlow = function(nums) {
    const hash_nums={};
    let count = 0;
    for(let i = 0 ; i < nums.length; i++){
        const hash_nums ={};
        hash_nums[nums[i]] = i;
        for(let j = i+1 ; j < nums.length ; j++){
            if(hash_nums[nums[j]] != null && hash_nums[nums[j]] < j){
                count++;
            }
        }
    }

    return count;
};