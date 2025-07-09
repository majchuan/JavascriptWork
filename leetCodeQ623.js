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
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if(depth == 1){
        const newRoot = new TreeNode(val,root);
        return newRoot;
    }
    dfs(root, val, depth, 1);
    return root;
};

const dfs=(node, val ,depth, level) =>{
    if(node == null) return ; 

    if(level == depth-1){
        const tempLeft = node.left;
        const tempRight = node.right;

        const leftNode = new TreeNode(val,tempLeft);
        const rightNode = new TreeNode(val,null, tempRight);
        node.left = leftNode ;
        node.right = rightNode;
        return;
    }
    dfs(node.left, val, depth, level+1);
    dfs(node.right, val, depth, level+1);
    return;
}