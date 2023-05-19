/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const hash_graph = {};

    for(let i = 0 ; i < graph.length ; i++){
        if( hash_graph[i] == null && dfs(graph, hash_graph ,i, true) == false) return false;
    }
    return true;
};

const dfs=(graph, hash_graph, index, hg)=>{
    if(hash_graph[index]!=null) return hash_graph[index] == hg ;

    hash_graph[index] = hg;

    const next = graph[index];
    for(let i of next){
        if(dfs(graph, hash_graph, i, !hg) == false) return false;
    }

    return true;
}