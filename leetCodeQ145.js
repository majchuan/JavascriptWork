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
 var postorderTraversal = function(root) {
    let result = [];
    result = postOrders(root,result);
    return result;
};

const postOrders =(node, result) =>{
    if(node == null) return result;
    
    if(node){
        result = postOrders(node.left, result);
        result = postOrders(node.right,result);
        result.push(node.val);
        return result;
    }
}