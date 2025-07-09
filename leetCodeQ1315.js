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
var sumEvenGrandparent = function(root) {
    const evens = [];
    return dfs(root, evens, 1);
};

const dfs= (node, evens, level) =>{
    if(node == null) return 0; 

    if(node.val % 2 == 0){
        evens[level] = level;
    }
    
    const leftNodeSum = dfs(node.left, evens.slice(), level + 1);
    const rightNodeSum = dfs(node.right, evens.slice(), level + 1);

    let sum = leftNodeSum + rightNodeSum; 

    if(evens[level-2] != null){
        sum += node.val; 
    }

    return sum;

}