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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root == null) return new TreeNode(val);
    dfs(root, val);
    return root;
};

const dfs=(node, val) =>{
    if(node.left == null || node.right == null){
        if(node.left == null && node.val > val){
            node.left = new TreeNode(val);
            return node.left;
        }

        if(node.right == null && node.val < val){
            node.right = new TreeNode(val);
            return node.right;
        }
    }

    if(node.val < val){
        return dfs(node.right ,val);
    }else{
        return dfs(node.left, val);
    }
}
