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
 var increasingBST = function(root) {
    const inOrderResult = [];
    inorderTraverse(root, inOrderResult);
    const inOrderRoot = new TreeNode(inOrderResult[0]);
    let currentNode = inOrderRoot;
    for(let i = 1 ; i < inOrderResult.length; i++){
        currentNode.right  = new TreeNode(inOrderResult[i]);
        currentNode = currentNode.right;
    }
    return inOrderRoot;
};

const inorderTraverse =(node, inOrderResult) =>{
    if(node == null) return node;
    
    inorderTraverse(node.left, inOrderResult);
    inOrderResult.push(node.val);
    inorderTraverse(node.right, inOrderResult);
}


var increasingBSTFaster = function(root) {
    let newRoot = null, newTree = null;
      
      const recurse = (node) => {
        if(!node) 
          return;
        
        recurse(node.left);
  
        if(!newRoot) {
          newRoot = newTree = node;
        } else {
          newTree = newTree.right = node;
          node.left = null;
        }
        recurse(node.right);
      }
      
      recurse(root);
      return newRoot;
  
  };