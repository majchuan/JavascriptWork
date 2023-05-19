/**
 * @param {number[][]} graph
 * @return {boolean}
 */
/*
*We will choose 2 colors 0 and 1.
*We should be able to color all the nodes where each neighbour is colored with a different color.
*None of the 2 neighbours should be colored with the same color.
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