/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let firstNode = 0
    let lastNode = graph.length - 1;
    const result =[];
    dfs(graph, firstNode, lastNode, null , result,[] );

    return result;
};

const dfs=(graph, startNode, lastNode , currNode, result, currNodes)=>{
    if(currNode == lastNode){
        currNodes.push(currNode);
        return result.push(currNodes);
    }
    currNodes.push(startNode);
    for(let node of graph[startNode]){
        currNode = node;
        dfs(graph,currNode, lastNode, currNode, result, currNodes.slice());
    }


}