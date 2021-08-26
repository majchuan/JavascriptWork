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
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right) 
}

var sortedArrayToBST = function(nums) {
    let startIndex = 0 ;
    let endIndex = nums.length-1;
    let midIndex = Math.floor((startIndex + endIndex)/2);
    const root = new TreeNode(nums[midIndex]);
    root.left  =buildBST(nums.slice(0,midIndex));
    root.right =buildBST(nums.slice(midIndex+1, nums.length));
    return root;
};

const buildBST =(nums) =>{
    let startIndex = 0 ;
    let endIndex = nums.length-1;
    let midIndex = Math.floor((startIndex + endIndex)/2);
    if(nums.length <= 1 ){
        if(nums.length == 0) return null ;
        if(nums.length == 1) return new TreeNode(nums[0]);
    }
    let node = new TreeNode(nums[midIndex]);
    node.left  = buildBST(nums.slice(0,midIndex));
    node.right = buildBST(nums.slice(midIndex+1, nums.length));
    return node ;
}

const nums=[-10,-3,0,5,9];
console.log(sortedArrayToBST(nums));