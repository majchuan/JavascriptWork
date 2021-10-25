/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    const hash_nums ={};
    for(let num of nums){
        hash_nums[num] ? hash_nums[num]++ : hash_nums[num] =1;
    }
    return nums.sort((x,y) =>{
        if(hash_nums[x] == hash_nums[y]){
            return y-x;
        }else{
            return hash_nums[x] - hash_nums[y] ;
        }
    });
};