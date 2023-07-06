/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
*O(n^2);
*/
var canJumpDPwithMemoization = function(nums) {
    const visited = new Set();

    return dfs(0, nums, visited);
};

const dfs = (index,nums,visited) =>{
    if(visited.has(index) && index != nums.length -1) return false; 
    if(visited.has(index) && index == nums.length -1) return true;
    visited.add(index);

    if(nums[index] == 0  && index != nums.length -1){
        return false; 
    }else if( index == nums.length -1){
        return true;
    }

    for(let i = 1 ; i <= nums[index] ; i++){
        let isReachLastIndex = dfs(index + i, nums, visited);
        if(isReachLastIndex) return true;
    }

    return false;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
*O(n)
*/
var canJumpGreedy = function(nums) {
    // Base condition...
    if(nums.length <= 1)
        return true;
    // To keep the maximum index that can be reached...
    let maximum = nums[0];
    // Traverse all the elements through loop...
    for(let i = 0; i < nums.length; i++){
        //if there is no way to jump to next...
        // so we should return false...
        if(maximum <= i && nums[i] == 0) 
            return false;
        //update the maximum jump...    
        if(i + nums[i] > maximum){
            maximum = i + nums[i];
        }
        //maximum is enough to reach the end...
        if(maximum >= nums.length-1) 
            return true;
    }
    return false;   
};