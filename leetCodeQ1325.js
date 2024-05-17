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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    return dfs(root, target);
};

const dfs=(node, target) =>{
    if(node == null) return null;
    
    node.left = dfs(node.left, target);
    node.right = dfs(node.right, target);

    if(node != null && node.left == null && node.right==null){
        if(node.val == target){
            return null;
        }
        return node;
    }

    return node;
}