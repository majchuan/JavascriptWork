/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const path = require("path/posix");

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    const paths ="";
    const result =[];
    recursivePaths(root, paths, result);
    return result;
};

const recursivePaths = (node, paths, result) =>{
    if(node == null) return paths;

    if(node.left == null && node.right==null){
        paths = paths +node.val;
        result.push(paths);
    }

    if(node.left){
        recursivePaths(node.left, paths + node.left.val + "->", result);
    }

    if(node.right){
        recursivePaths(node.right, path+ node.right.val +"->", result);
    }
}