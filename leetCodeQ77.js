/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    const curr=[];
    const result=[];
    dfs(n,k,1,curr,result);
    //console.log(result);
    return result;
};

const dfs=(n,k,index,curr,result) =>{
    if(curr.length == k){
        result.push(curr.slice());
        return;
    }
    
    for(let i = index ; i <= n; i++){
        curr.push(i);
        dfs(n,k,i+1, curr, result);
        curr.pop();
    }
    
    return;
}

const n = 4, k = 2;
console.log(combine(n,k));