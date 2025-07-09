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
var findBottomLeftValue = function(root) {
    const hash_tree ={};
    const maxKey = dfs(root, hash_tree, 0);
    return hash_tree[maxKey][0];
}

const dfs=(node, hash_tree, level) =>{
    let maxKey = 0 ; 
    if(node == null) return level-1;

    hash_tree[level] ? hash_tree[level].push(node.val) : hash_tree[level]=[node.val];

    let leftMaxKey = dfs(node.left, hash_tree, level+1);
    let rightMaxKey = dfs(node.right, hash_tree, level+1);

    return Math.max(leftMaxKey, rightMaxKey);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValueBFS = function(root) {
    if (root === null) return null;
    
    const queue = [root];
    let bottomLeft;

    while(queue.length > 0) {
        const size = queue.length;
        for(let i = 0; i < size; i++) {
            const current = queue.shift();
            if(i === 0) bottomLeft = current.val;
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }
    return bottomLeft
}
