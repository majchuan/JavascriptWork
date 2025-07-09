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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const levels = [];
    traverseLevelOrder(root, levels, 0)
    return levels;
};

const traverseLevelOrder = (node, levels, level) => {
    if(node == null){
        return;
    }

    if(levels[level] == null){
        levels[level] =[];
    }
    levels[level].push(node.val) ;
    const leftNode = traverseLevelOrder(node.left, levels, level+1);
    const rightNode = traverseLevelOrder(node.right, levels, level+1);
}