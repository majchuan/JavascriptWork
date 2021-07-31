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
function TreeNode(val, left, right) {
 this.val = (val===undefined ? 0 : val)
 this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
}

var pruneTree = function(root) {
    if(root == null) return null;
    
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    
    if(root && root.left == null && root.right==null){
        if(root.val == 0){
            return null ;
        }else{
            return root;
        }
    }
    
    return root;
};

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(0);
root.right.right.left = new TreeNode(0);
root.right.right.right = new TreeNode(1);

console.log(pruneTree(root));