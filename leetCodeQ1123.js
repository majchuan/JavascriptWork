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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    let maxDepth ={
        value : -11 
    }
    let resultNode = new TreeNode();
    
    findCommonAncestor(root, 0 , maxDepth, resultNode);
    
    return result ;
};

const findCommonAncestor =(node,deep,maxDepth, resultNode) =>{
    if(node == null) return deep;
    
    let left = findCommonAncestor(node.left, deep+1, maxDepth, resultNode);
    let right = findCommonAncestor(node.right, deep+1, maxDepth, resultNode);
    
    if(left == right && left >= maxDepth.value){
        maxDepth.value = left ;
        resultNode.val = node.val;
        resultNode.left = node.left;
        resultNode.right = node.right;
    }
    
    return Math.max(left,right);
}