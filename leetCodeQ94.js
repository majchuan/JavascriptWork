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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    result = [];
    traversalInorder(root,result);
    return result;
};

//in order traversal from root-left-right
const traversalInorder = (node, result) =>{
    if(node == null) return null;
    
    const leftNode = traversalInorder(node.left, result);
    if(node){
        result.push(node.val)
    }
    const rightNode = traversal(node.right, result);
}

//pre order traversal from small to big
const traversalPreorder = (node,result) =>{
    if(node == null) return node ;
    result.push(node.val);
    const leftNode = traversalPreorder(node.left, result);
    const rightNode = traversalPreorder(node.right, result);
}

//post order traversal from 
const traversalPostorder =(node,result) =>{
    if(node == null) return node;
    const leftNode = traversalPostorder(node.left, result);
    const rightNode = traversalPostorder(node.right, result);
    if(node){
        result.push(node.val);
    }
}