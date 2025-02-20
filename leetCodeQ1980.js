/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const set_nums = new Set();
    const n = nums.length;
    for(let num of nums){
        set_nums.add(num);
    }

    return dfs(n,set_nums, "");
};

const dfs=(n,set_nums, currNum) =>{
    if(currNum.length == n){
        if(set_nums.has(currNum) == false){
            return currNum;
        }
        return "";
    }

    let addZero = dfs(n ,set_nums, currNum +'0');
    if(addZero.length == n){
        return addZero;
    }

    return dfs(n, set_nums, currNum + '1');
}
