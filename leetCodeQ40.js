/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result =[];
    const arr=[];
    candidates.sort((a,b) => a-b);
    dfs(candidates,target,0,0,arr,result);
    return result;
};

const dfs =(candidates, target, sum , index , arr ,result) =>{
    
    if(sum == target){
      result.push(arr);
      return;
    }
    
    for(let i = index ; i < candidates.length && candidates[i] + sum <= target; i++){
        if(i > index && candidates[i] == candidates[i-1]) continue ; 
        dfs(candidates, target, sum + candidates[i], i+1 , [...arr, candidates[i]], result);
    }
    return;
}

const candidates = [10,1,2,7,6,1,5], target = 8;
const candidates1 = 
[14,6,25,9,30,20,33,34,28,30,16,12,31,9,9,12,34,16,25,32,8,7,30,12,33,20,21,29,
24,17,27,34,11,17,30,6,32,21,27,17,16,8,24,12,12,28,11,33,10,32,22,13,34,18,12] ,target1 =27;
console.log(combinationSum2(candidates1,target1));

