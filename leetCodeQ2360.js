/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    const visited = new Set();
    let counter = -1;
    for(let i = 0 ; i < edges.length ; i++){
        if(edges[i]  != -1 && visited.has(i) == false ){
            const hash_edges = {};
            hash_edges[i] = 1 ;
            counter = Math.max(counter, dfs(i,hash_edges,visited,edges));
        }
    }
    return counter;
};

const dfs=(n, hash_edges, visited, edges) =>{
    visited.add(n);
    let nextEdge = edges[n];
    if(nextEdge != -1 && visited.has(nextEdge) == false){
        hash_edges[nextEdge] = hash_edges[n] +1;
        return dfs(nextEdge, hash_edges, visited, edges);
    }else if(nextEdge != -1  && hash_edges[nextEdge] != null ){
        return hash_edges[n] + 1 - hash_edges[nextEdge];
    }else{
        return -1;
    }
}


const edges = [3,3,0,0,7,0,7,5];

console.log(longestCycle(edges));