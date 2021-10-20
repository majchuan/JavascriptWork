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
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var isSymmetric = function(root) {
  if(root == null){
      return true;
  }else{
      return dfs(root.left,root.right);
  }  
};

const dfs = (leftNode, rightNode) => {
    if(leftNode == null && rightNode ==null){
        return true;
    }

    if((leftNode != null && rightNode == null) ||(leftNode == null && rightNode !=null) || (leftNode.val != rightNode.val) ){
        return false;
    }

    return dfs(leftNode.left, rightNode.right) && dfs(leftNode.right, rightNode.left) ; 
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));