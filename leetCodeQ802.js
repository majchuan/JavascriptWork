/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const visited = new Set();
    const unSafeNodes = [];
    const result=[];

    for(let i = 0 ; i < graph.length; i++){
        if(dfs(i, graph, visited, unSafeNodes) == false){
            result.push(i);
        }
    }
    return result;
};

const dfs=(index, graph , visited, unSafeNodes) =>{
    if(unSafeNodes.includes(index)) return true;

    if(visited.has(index)) return false;

    visited.add(index);
    unSafeNodes.push(index);

    const next = graph[index];

    if(next == null) return false;

    for(let nextIndex of next){
        if(dfs(nextIndex, graph, visited, unSafeNodes)){
            return true;
        }
    }

    unSafeNodes.pop();
    return false;

}