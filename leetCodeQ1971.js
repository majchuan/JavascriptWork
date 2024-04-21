/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const hash_edges={};
    const visited = new Set();

    if(n==1 && edges.length == 0) return true;

    for(let edge of edges){
        const start = edge[0];
        const end = edge[1];

        hash_edges[start] ? hash_edges[start].push(end) : hash_edges[start]=[end];
        hash_edges[end] ? hash_edges[end].push(start) : hash_edges[end] =[start];
    }

    return dfs(hash_edges, source, destination, visited);
};

const dfs=(hash_edges, source, destination, visited) =>{
    if(hash_edges[source] == null) return false;

    if(visited.has(source)) return false;
    visited.add(source);

    const nextDestinations = hash_edges[source];

    for(let next of nextDestinations){
        if(next == destination) return true;
        let isDestinationReach = dfs(hash_edges, next , destination, visited);
        if(isDestinationReach) return true; 
    }

    return false;
}