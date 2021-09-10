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
 var invertTree = function(root) {
    if(root == null) return null;
    const invertRoot = new TreeNode(root.val);
    return travseTree(root, invertRoot);
};

const travseTree = (node, invertNode) =>{
    if(node.left == null && node.right ==null){
        invertNode = new TreeNode(node.val);
        return invertNode;
    }
    if(node.left != null){
        invertNode.right = new TreeNode(node.left.val);
        travseTree(node.left, invertNode.right);
    }
    
    if(node.right != null){
        invertNode.left = new TreeNode(node.right.val);
        travseTree(node.right, invertNode.left);
    }
    return invertNode; 
    
}