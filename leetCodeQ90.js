/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    nums.sort((x,y) => x-y);
    const subsets = [];
    dfsWithoutDuplicate(nums,subsets,[],0);
    return subsets;
};

const dfsWithoutDuplicate=(nums, subsets, currentNums,index) =>{
    subsets.push(currentNums);
    for(let i = index ; i < nums.length ; i++){
        //if (nums[i] === nums[i - 1] && i !== index) continue;
        if(nums[i] != nums[i-1] || i == index){
            dfsWithoutDuplicate(nums,subsets, currentNums.concat(nums[i]),i+1);
        }
    }

    return subsets;
}
