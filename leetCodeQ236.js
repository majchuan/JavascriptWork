/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root.val == p.val || root.val == q){
        return root;
    }

    const leftNode = lowestCommonAncestor(root.left, p, q);
    const rightNode = lowestCommonAncestor(root.right, p, q);

    if(leftNode && rightNode){
        return root;
    }
    if(leftNode){
        return leftNode;
    }
    if(rightNode){
        return rightNode;
    } 
    
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const nums= [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4;

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right =new TreeNode(4);

console.log(lowestCommonAncestor(root,p,q));