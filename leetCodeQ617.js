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
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var mergeTrees = function(root1, root2) {
    if(root1 == null && root2 == null) return null ;
    if(root1== null){
        root1 = new TreeNode(root2.val);
    }else{
        root1.val = root1.val + (root2 == null ? 0 : root2.val);
    }
    root1.left = mergeTrees(root1 == null ? null : root1.left,  root2 == null ? null : root2.left);
    root1.right = mergeTrees(root1 == null ? null :root1.right, root2 == null ? null : root2.right);

    return root1;
};