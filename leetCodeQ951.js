/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    return dfs(root1, root2);
};

const dfs=(node1, node2) =>{
    if(node1 == null && node2 != null) return false;
    if(node1 != null && node2 == null) return false;
    if(node1 == null && node2 == null) return true;
    if(node1.val != node2.val) return false;

    let noSwap = dfs(node1.left, node2.left) && dfs(node1.right, node2.right);
    let swap = dfs(node1.left, node2.right) && dfs(node1.right, node2.left);

    return noSwap || swap; 
}
