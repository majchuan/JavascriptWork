/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    const hash_edges = {};
    const result = new Set();
    const visited = new Set();
    const restrictedSet = new Set(restricted);

    for(let edge of edges){
        const [a,b] = edge;
        hash_edges[a] ? hash_edges[a].add(b) : hash_edges[a] = new Set().add(b);
        hash_edges[b] ? hash_edges[b].add(a) : hash_edges[b] = new Set().add(a);
    }
    result.add(0);
    dfs(0,hash_edges, restrictedSet, result ,visited);
    return result.size;
};

const dfs=(index, hash_edges, restricted, result,visited) =>{
    const edges = hash_edges[index];
    if(edges == null) return ; 
    if(visited.has(index)) return ;
    visited.add(index);

    for(let edge of edges){
        if(restricted.has(edge)) continue;
        result.add(edge);
        dfs(edge,hash_edges, restricted, result,visited);
    }
}