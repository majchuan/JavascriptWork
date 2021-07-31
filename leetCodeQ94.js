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
 var inorderTraversal = function(root) {
    result = [];
    traversal(root,result);
    return result;
};

const traversal = (node, result) =>{
    if(node == null) return null;
    
    const leftNode = traversal(node.left, result);
    if(node){
        result.push(node.val)
    }
    const rightNode = traversal(node.right, result);
}