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
 * @return {string}
 */
 var tree2str = function(root) {
    if(root == null) return "";
    return dfs(root);
};

const dfs=(node) =>{
    if(node == null) return null;
    
    const leftNode = dfs(node.left);
    const rightNode = dfs(node.right);
    
    if(leftNode == null && rightNode == null){
        return node.val.toString();
    }
    
    if(rightNode == null){
        return node.val+"("+leftNode+")";
    }
    
    if(rightNode != null){
        return node.val+"("+(leftNode == null ? "" : leftNode)+")"+"(" + rightNode+")";
    }
    
}