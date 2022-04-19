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
 var convertBST = function(root) {
    let totalSum = 0;
    totalSum = dfs(root, totalSum);
    return root;
    
};

const dfs=(node,totalSum)=>{
    if(node == null) return totalSum;
    
    totalSum = dfs(node.right, totalSum);
    totalSum += node.val;
    node.val = totalSum; 
    //console.log(totalSum)
    totalSum = dfs(node.left, totalSum);
    return totalSum;
}