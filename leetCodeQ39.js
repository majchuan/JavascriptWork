/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result =[];
    dfsSum(0,0,[],result,candidates, target);
    return result;
};

const dfsSum=(sum, index , arr, result , candidates, target)=>{
    
    if(sum == target){
        result.push(arr);
    }else if(sum > target){
        return ;
    }
    
    for(let i = index ; i < candidates.length ; i++){
        dfsSum(sum+candidates[i], i, [...arr, candidates[i]], result, candidates,target );
    }
}

const candidates =[2,3,6,7], target = 7 ;
console.log(combinationSum(candidates,target));
