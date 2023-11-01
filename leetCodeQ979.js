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
 * @return {number}
 */
var distributeCoins = function(root) {
    let result = 0;
    const dfs=(node) =>{
        if(node == null) return 0 ;

        let left = dfs(node.left);
        let right = dfs(node.right);

        result += Math.abs(left) + Math.abs(right);

        return node.val + left + right - 1 ; ////accumulated coins at root, subtract 1 to leave at root
    }

    dfs(root);

    return result;

};
