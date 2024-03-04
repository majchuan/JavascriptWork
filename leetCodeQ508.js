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
var findFrequentTreeSum = function(root) {
    const hash_sum = {};
    dfs(root, hash_sum);

    const sums = Object.keys(hash_sum).sort((a,b) => hash_sum[b] - hash_sum[a]);
    
    const maxFreq = hash_sum[sums[0]];

    return sums.filter(x => hash_sum[x] == maxFreq);
};

const dfs=(node,hash_sum) =>{
    if(node == null){
        return 0;
    }

    const leftTreeSum = dfs(node.left, hash_sum);
    const rightTreeSum = dfs(node.right, hash_sum);

    let currentTreeSum = leftTreeSum + rightTreeSum + node.val;

    hash_sum[currentTreeSum] ? hash_sum[currentTreeSum]++ : hash_sum[currentTreeSum]=1;

    return currentTreeSum;
}