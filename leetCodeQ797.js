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

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTargetBetterStyle = function (graph) {
    const n = graph.length - 1;
    const result = [];

    dfs(graph, 0, n, result, [0]);

    return result;
};

const dfsBetterStyle = (graph, i, n, result, currentPath) => {
    if (i === n) {
        result.push(currentPath.slice());
    }

    for (let neighbour of graph[i]) {
        currentPath.push(neighbour)
        dfs(graph, neighbour, n, result, currentPath);
        currentPath.pop()
    }
}