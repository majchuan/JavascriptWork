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
var longestZigZag = function(root) {
    return Math.max(dfs(root.left, 0 ,0) , dfs(root.right, 0 ,1));
};

const dfs=(node,maxZigPath,direction)=>{
    //console.log(maxZigPath);
    if(node == null) return maxZigPath; 

    const leftMaxZigPath = dfs(node.left, direction == 0 ? 0 : maxZigPath + 1 , 0 );
    const rightMaxZigPath = dfs(node.right, direction == 0 ? maxZigPath + 1 : 0 , 1);

    return Math.max(leftMaxZigPath, rightMaxZigPath);

}