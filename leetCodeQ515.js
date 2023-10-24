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
var largestValues = function(root) {
    const levels = [Number.MIN_SAFE_INTEGER];

    if(root == null) return [];

    dfs(root, levels, 0);

    return levels;

};

const dfs = (node, levels, level) =>{

    if(node == null) return;

    levels[level] = Math.max(node.val , levels[level] != null ? levels[level] : Number.MIN_SAFE_INTEGER);

    dfs(node.left, levels, level+1);
    dfs(node.right, levels, level+1);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// correct
var largestValuesBfs = function(root) {
    if (root == null) return [];

    let ans = [];

    let queue = [];
    queue.push(root);
    
    while (queue.length !== 0) {
        let queueSize = queue.length;
        let maxValue = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < queueSize; i++) {
            let node = queue.shift();
            maxValue = Math.max(maxValue, node.val);

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        ans.push(maxValue);
    }

    return ans;
};