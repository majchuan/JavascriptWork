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
var isBalanced = function(root) {
    const isBalancedTree ={
        flag : true
    }
    getHeight(root, isBalancedTree);
    return isBalancedTree.flag;
};

const getHeight =(node, isBalancedTree) =>{
    if(node == null) return 0 ;

    let leftHeight = getHeight(node.left, isBalancedTree) ;
    let rightHeight = getHeight(node.right, isBalancedTree);
    if(Math.abs(leftHeight - rightHeight) > 1){
        isBalancedTree.flag = false;
    }
    return 1 + Math.max(leftHeight, rightHeight);
} 