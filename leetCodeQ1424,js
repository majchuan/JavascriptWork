/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const hash_nums ={};
    const result = [];
    const m = nums.length ;
    for(let i = 0 ; i < m ; i++){
        const n = nums[i].length;
        for(let j = 0 ; j < n ; j++){
            hash_nums[i+j] ? hash_nums[i+j].push(nums[i][j]) : hash_nums[i+j]=[nums[i][j]];
        }
    }
    const keys = Object.keys(hash_nums).sort((a,b) => a - b);
    for(let key of keys){
        const values = hash_nums[key].reverse();
        result.push(...values);
    }

    return result;
};