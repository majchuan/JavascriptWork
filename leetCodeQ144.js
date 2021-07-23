/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    const preOrderNode = [] ;
    preOrderNodeValueTraversal(root, preOrderNode);
    return preOrderNode;
};

const preOrderNodeValueTraversal = (node, preOrderNode) =>{
    if(node == null) return null;
    if(node){
        preOrderNode.push(node.val);
        preOrderNodeValueTraversal(node.left, preOrderNode);
        preOrderNodeValueTraversal(node.right,preOrderNode);
    }
}