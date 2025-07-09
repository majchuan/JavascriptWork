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
//root.left = new TreeNode(2);
//root.right = new TreeNode(2);
//root.left.right = new TreeNode(3);
//root.right.right = new TreeNode(3);

//console.log(isSymmetric(root));

const bfs =(node) =>{

    if(node && node.left == null && node.right == null) return true;
    if(node.left == null || node.right == null) return false;
    
    const leftQueue = [node.left];
    const rightQueue =[node.right];

    while(leftQueue.length > 0 && rightQueue.length > 0){
        const leftNode = leftQueue.pop();
        const rightNode = rightQueue.pop();
        if(leftNode && rightNode == null) return false;
        if(leftNode == null && rightNode) return false;
        if(leftNode.val != rightNode.val ) return false;

        if(leftNode.left && rightNode.right){
            leftQueue.push(leftNode.left);
            rightQueue.push(rightNode.right);
        }else if(leftNode.left || rightNode.right) return false;

        if(leftNode.right && rightNode.left){
            leftQueue.push(rightNode.left);
            rightQueue.push(leftNode.right);
        }else if(leftNode.right || rightNode.left) return false;
    }

    return true;
}

console.log(bfs(root));