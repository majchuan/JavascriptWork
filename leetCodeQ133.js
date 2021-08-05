/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 
var cloneGraph = function(node) {
    let nodeGraph = {};

    return traverse(node,nodeGraph);
}


const traverse = (node,nodeGraph) =>{
    if(node == null) return node; 
    if(nodeGraph[node.val] == null){
        nodeGraph[node.val] = new Node(node.val);
        for(let neighbor of node.neighbors){
            nodeGraph[node.val].neighbors.push(traverse(neighbor, nodeGraph));
        }
    }

    return nodeGraph[node.val];
}

function Node(val,neighbors){
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}