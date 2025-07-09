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
var maxSumBST = function(root) {
    let max = 0;

    function sumBST(node) {
        if (!node)
        return {
            min: null,
            max: null,
            sum: 0,
        };

        const left  = sumBST(node.left);
        const right = sumBST(node.right);

        if (left == null || right == null) return null;

        if ((left.max != null && node.val <= left.max) || (right.min != null && node.val >= right.min)) return null;

        const sum = left.sum + right.sum + node.val;
        max = Math.max(sum, max);
        return { min: left.min ?? node.val, max: right.max ?? node.val, sum };
    }

   sumBST(root);
   return max;
};