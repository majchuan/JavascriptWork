/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    const freqMap = new Map(); // track elements
    nums.sort((a,b) => a - b);

    return dfs(nums,k,freqMap,0) -1;
};

const dfs=(nums, k, freqMap, index)=>{
    //base case: return 1 for a subset of size 1
    if(index == nums.length){
        return 1;
    }
    // count subsets where nums[i] is not taken
    let totalCount = dfs(nums, k , freqMap, index+1);

    // if nums[i] can be taken without violating the condition
    if(freqMap.has(nums[index] - k) == false){
        freqMap.set(nums[index], (freqMap.get(nums[index]) || 0) + 1); // mark nums[i] has taken

        totalCount += dfs(nums, k, freqMap, index+1);
        freqMap.set(nums[index], freqMap.get(nums[index]) - 1); // backtrack: mark nums[i] as not taken.
        //Remove nums[i] from freqMap if its count becomes 0;
        if(freqMap.get(nums[index]) == 0){
            freqMap.delete(nums[index]);
        }
    }

    return totalCount;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsetsFastFunction = function(nums, k) {
    return dfsFast(nums, k);
};

const dfsFast=(nums,k)=>{
    let result = 0 ;
    const n = nums.length;
    if(n == 0) return 0;
    for(let i = 0 ; i < n ; i++){
        const next = [];
        for(let j = i+1; j < n ; j++){
            if(Math.abs(nums[i] - nums[j]) != k ){
                next.push(nums[j]);
            }
        }
        result += 1 + dfs(next,k);
    }
    return result;
}

