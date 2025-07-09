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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    
    dfs(root, 0);

    return root;
};

const dfs=(node,sum)=>{
    if(node == null) return sum;

    node.val += dfs(node.right, sum);

    return dfs(node.left, node.val);
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst1 = function(root) {
    let sum = 0;

    const dfs1 = (node) =>{
        if(node){
            dfs(node.right);
            sum += node.val;
            node.val = sum;
            dfs(node.left);
        }
    }

    dfs1(root);

    return root;
};