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
var averageOfSubtree = function(root) {
    let nodeCounts = 0 ;

    const dfs = (node) =>{
        if(node == null) return [0,0] ; 

        const leftSum = dfs(node.left);
        const rightSum = dfs(node.right);

        const totalNodes = leftSum[1] + rightSum[1] + 1 ; // current nodes number;
        const totalSum = node.val + leftSum[0] + rightSum[0]; // current Sum of node value.
        const average = Math.floor(totalSum / totalNodes);

        if(average == node.val) nodeCounts++;
        return [totalSum, totalNodes];
    };

    dfs(root);
    return nodeCounts;
};
