/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    const result = [];
    if(n == 0 ) return arr;

    for(let item of arr){
        dfs(item, n, 1, result);
    }
    return result;
};

const dfs=(curr, n, depth, result) =>{
    if(depth == n){
        if(Array.isArray(curr)){
            for(let a of curr){
                result.push(a);
            }
        }else{
            result.push(curr);
        }
        return ;
    }

    if(Array.isArray(curr)){
        for(let item of curr){
            dfs(item, n, depth+1, result);
        }
    }else{
        result.push(curr);
    }
    return ;
    
    
}