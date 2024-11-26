/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
    const hash_edges = new Map();

    for(let i = 0 ; i < edges.length; i++){
        const edge= edges[i];
        if(hash_edges.has(edge[0])){
            hash_edges.get(edge[0]).push(edge[1]);
        }else{
            hash_edges.set(edge[0],[edge[1]]);
        }
    }

    let championCount= 0;
    for(let i = 0 ; i < n ; i++){
        const visited = new Set();
        dfs(hash_edges, visited, i );
        if(visited.size == n){
            championCount++;
            if(championCount == 1){
                return i;
            }
        }
    }

    return -1;
};

const dfs=(hash_edges, visited , currIndex) =>{
    if(visited.has(currIndex)) return; 
    visited.add(currIndex);
    const edges = hash_edges.get(currIndex);
    if(edges == null) return;
    for(let edge of edges){
        dfs(hash_edges, visited, edge);
    }
}
