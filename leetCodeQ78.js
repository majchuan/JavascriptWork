/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let result = [];
    dfs(nums,result,[], 0);
    
    return result;
};

const dfs =(nums,result,current, index) => {
    result.push(current);
    for(let i= index ; i < nums.length ;i++){
        dfs(nums,result,current.concat(nums[i]),i+1);
    }
    return result;
}