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
var evaluateTree = function(root) {
    if(root != null && root.left == null && root.right == null){
        if(root.val == 0){
            return false;
        }else{
            return true;
        }
    }

    if(root.val == 2){
        return evaluateTree(root.left) || evaluateTree(root.right);
    }else{
        return evaluateTree(root.left) && evaluateTree(root.right);
    }
};