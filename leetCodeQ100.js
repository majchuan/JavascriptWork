/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var isSameTree = function(p, q) {
    if(p == null && q == null){
        return true
    }
    if(p != null && q == null){
        return false;
    }

    if(p == null && q != null){
        return false;
    }
    if(p.val != q.val){
        return false;
    }
    
    const leftTreeSame = isSameTree(p.left, q.left);
    const rightTreeSame = isSameTree(p.right,q.right);
    
    return leftTreeSame && rightTreeSame;
};

const p= new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);
const q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

console.log(isSameTree(p,q));