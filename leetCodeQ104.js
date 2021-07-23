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
 * @return {number}
 */
 var maxDepth = function(root) {
    let depth = 0 ;
    depth = maxBinaryDepth(root, depth);
    return depth;
};

const maxBinaryDepth =(node, depth) =>{
    if(node == null) return depth;
    
    if(node){
        depth++;
        let leftDepth = maxBinaryDepth(node.left,depth);
        let rightDepth = maxBinaryDepth(node.right,depth);
        return Math.max(leftDepth, rightDepth);
    }
}