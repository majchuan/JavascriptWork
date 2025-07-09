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
var maxAncestorDiff = function(root) {
    const result = [];
    return dfs(root, result);
};

const dfs = (node, result) =>{
    if(node == null){
        let diff = Math.max(...result) - Math.min(...result);
        return diff;
    }
    result.push(node.val);
    let leftDiff = dfs(node.left, result.slice());
    let rightDiff = dfs(node.right, result.slice());

    return Math.max(leftDiff, rightDiff);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiffFastApproach = function(root) {
    return getMaxDiff(root, root.val , root.val);
};

const getMaxDiff=(node, min, max) =>{
    if(node == null){
        return Math.abs(max - min);
    }
    min = Math.min(node.val, min);
    max = Math.max(node.val, max);
    let leftDiff = getMaxDiff(node.left, min, max);
    let rightDiff = getMaxDiff(node.right, min, max);
    return Math.max(leftDiff,rightDiff);
}