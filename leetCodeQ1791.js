/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let [node1,node2] = edges[0];
    let [node3,node4] = edges[1];
    if(node1===node3 || node1===node4)return node1
    else return node2;

};


var findCenterSlowerApproach = function(edges) {
    const hash_edges = {};
    for(let edge of edges){
        hash_edges[edge[0]] ? hash_edges[edge[0]].push(edge[1]) : hash_edges[edge[0]] = [edge[1]];
        hash_edges[edge[1]] ? hash_edges[edge[1]].push(edge[0]) : hash_edges[edge[1]] = [edge[0]];
    }

    const keys = Object.keys(hash_edges);

    for(let i = 1 ; i<= keys.length ; i++){
        if(hash_edges[i].length == keys.length-1) return i ;
    }

    return -1;

};