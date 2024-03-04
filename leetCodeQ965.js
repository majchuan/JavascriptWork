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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let leftNode = root.left == null || (root.val == root.left.val && isUnivalTree(root.left));
    let rightNode = root.right == null || (root.val == root.right.val && isUnivalTree(root.right));
 
    return leftNode && rightNode;
 };