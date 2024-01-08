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
 * @return {string[][]}
 */
var printTree = function(root) {
    const getHeight = (node) => {
       if (!node) return 0
       return 1 + Math.max(getHeight(node.left), getHeight(node.right));
   }
   const row = getHeight(root) - 1
   const column = Math.pow(2, row + 1) - 1
   const matrix = Array(row+1).fill().map(() => Array(column).fill(''))
   const build = (node, matrix, r , c) => {
       if (r < 0 || c < 0 || r>=matrix.length || c >=matrix[0].length || !node) return
       matrix[r][c] = `${node.val}`
       build(node.left, matrix, r+1, c - Math.pow(2, row - r - 1))
       build(node.right, matrix, r+1, c + Math.pow(2, row - r - 1))
   } 
   build(root, matrix, 0, (column - 1)/2)
   return matrix
};
