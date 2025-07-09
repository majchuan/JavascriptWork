/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    let hash_edges={};
    for(let i = 0 ; i < n ; i++){
        hash_edges[i] = [];
    }
    for(let edge of edges){
        hash_edges[edge[0]] ? hash_edges[edge[0]].push(edge[1]) : hash_edges[edge[0]]=[edge[1]];
        hash_edges[edge[1]] ? hash_edges[edge[1]].push(edge[0]) : hash_edges[edge[1]]=[edge[0]];
    }

    let visited = new Set();
    let counters=[];
    for(let i = 0; i < n ; i++){
        if(visited.has(i)== false){
            visited.add(i);
            counters.push(dfs(i,hash_edges, visited));
        }
    }

    //console.log(counters);
    let sum = 0
    for(let i = 0 ; i < counters.length ; i++){
        sum += ((n -counters[i]) * counters[i])/2;
    }

    return sum;
};

const dfs=(n,hash_edges, visited) =>{
    let counter = 1;
    let next = hash_edges[n];
    if(next == null) return counter;
    
    for(let nextVal of next){
        if(visited.has(nextVal)) continue;
        visited.add(nextVal);
        counter += dfs(nextVal,hash_edges,visited);
    }

    return counter ;
}

const n = 7, edges=[[0,2],[0,5],[2,4],[1,6],[5,4]];
console.log(countPairs(n,edges));