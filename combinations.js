/*
*Return all possible combinations of k number choosen from the range [1, n]
*/
const combine = (n, k) =>{
    const result = [];
    const visited = new Set();
    //dfs(n,k,result, [], 1);
    dfs1(n,k,result,visited);
    console.log(result);
}

const dfs =(n,k,result, curr ,index) =>{

    if(curr.length == k){
        result.push(curr.slice());
        return;
    }

    for(let i = index ; i <= n; i++){
        curr.push(i);
        dfs(n,k,result, curr, i + 1);
        curr.pop();
    }
    return;
}

const dfs1 =(n,k,result,visited) =>{

    if(visited.size == k){
        result.push([...visited]);
    }

    for(let i = 1 ; i <= n ; i++){
        if(visited.has(i)) continue;
        visited.add(i);
        dfs1(n,k,result,visited);
        visited.delete(i);
    }
    return;
}

const n = 4, k=2;
console.log(combine(n,k));