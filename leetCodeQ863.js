/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const result = [];
    if(root  == null) return [];
    const node = findTargetNode(root, null, target);
    const visited = new Set();
    findAllKDisNode(node,k, result, visited);
    return result;

};

const findTargetNode = (node, parent, target) =>{
    if(node == null) return null ;
    node.parent = parent;
    if(node == target){
        return node;
    }

    return findTargetNode(node.left, node, target) || findTargetNode(node.right, node, target);
}

const findAllKDisNode = (node ,k , result, visited) =>{
    if(node == null || visited.has(node)) return ;

    if(k == 0){
        result.push(node.val);
        return ;
    }

    visited.add(node);
    findAllKDisNode(node.left, k-1, result, visited);
    findAllKDisNode(node.right, k-1, result, visited);
    findAllKDisNode(node.parent, k-1, result, visited);
}