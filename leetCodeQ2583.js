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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    const hash_sum = {};
    dfs(root, hash_sum, 1);

    const keys = Object.keys(hash_sum).sort((a,b) => hash_sum[b] - hash_sum[a]);
    //console.log(hash_sum,keys);

    return  keys.length < k ? -1 : hash_sum[keys[k-1]];
};

const dfs=(node, hash_sum, level)=>{
    if(node == null) return;
    
    hash_sum[level] ? hash_sum[level] += node.val : hash_sum[level] = node.val;

    dfs(node.left, hash_sum, level+1);
    dfs(node.right, hash_sum, level+1);

    return;
}