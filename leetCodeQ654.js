/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let maxNum = 0;
    let maxNumIndex = 0;
    if(nums == null || nums.length ==0) return null ; 

    maxNum = Math.max(...nums);
    maxNumIndex = nums.indexOf(maxNum);

    const root = new TreeNode(maxNum);
    root.left = constructMaximumBinaryTree(nums.slice(0,maxNumIndex));
    root.right = constructMaximumBinaryTree(nums.slice(maxNumIndex+1, nums.length));

    return root;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const nums=[3,2,1,6,0,5];
console.log(constructMaximumBinaryTree(nums));