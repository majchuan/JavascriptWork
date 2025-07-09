/*
*find all subsets of input array. back tracing alghtorim. 
*/

const findAllSubsets = (nums) =>{

    return nums.reduce((subsets,num) => subsets.concat(
        subsets.map( set => [...set, num])
    ),[[]]);
}

const nums = [1,2,2];

//console.log(findAllSubsets(nums));

/* dfs to find all subsets */
const dfsSubsets = (nums) =>{
    const subsets =[];
    return dfs(nums, subsets, [], 0);
}

const dfs =(nums, subsets , currentNums, index) =>{
    subsets.push(currentNums);
    for(let i = index ; i <nums.length ; i++){
        dfs(nums,subsets, currentNums.concat(nums[i]), i+1);
    }
    return subsets;
}

//console.log(dfsSubsets(nums));

const dfsSubsetsWithoutDuplicate=(nums) =>{
    const subsets = [];
    dfsWithoutDuplicate(nums,subsets,[],0);
    return subsets;
}
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



console.log(dfsSubsetsWithoutDuplicate(nums));