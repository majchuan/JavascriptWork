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
var rightSideView = function(root) {
    const levels =[];
    helper(root, levels, 0);
    return levels; 
};

const helper =(node,levels, level) =>{

    if(node == null) return node;

    levels[level] = node.val;

    const leftNode = helper(node.left, levels, level+1);
    const rightNode = helper(node.right, levels, level+1);

    return node;
}