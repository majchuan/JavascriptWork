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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const uniqueDeleteSet = new Set(to_delete);
    const forest = [];
    root = dfs(root, uniqueDeleteSet, forest);
    if(root != null){
        forest.push(root);
    }
    return forest;
};

const dfs=(node, uniqueDeleteSet, forest) =>{
    if(node == null){
        return null;
    }

    node.left = dfs(node.left, uniqueDeleteSet, forest);
    node.right = dfs(node.right, uniqueDeleteSet, forest);

    if(uniqueDeleteSet.has(node.val)){
        if(node.left != null){
            forest.push(node.left);
        }

        if(node.right != null){
            forest.push(node.right);
        }

        return null;
    }

    return node;
}