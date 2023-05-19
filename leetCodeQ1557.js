/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const edgesSet = new Set();
    const result = [];
    for(let edge of edges){
        edgesSet.add(edge[1]);
    }

    for(let i = 0 ; i < n ; i++){
        if(edgesSet.has(i) == false){
            result.push(i);
        }
    }

    return result;

};