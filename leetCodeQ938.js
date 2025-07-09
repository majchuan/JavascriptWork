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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    const output = [];
    if(root){
        if(root.left){
            travseBST(root.left,low,high,output);
        }
        if(root.val >= low && root.val <= high){
            output.push(root.val);
        }
        if(root.right){
            travseBST(root.right,low,high,output);
        }
        
    }
    
    return output.reduce((x,y)=> x+y ,0);
};

const travseBST = (node,low, high,output) =>{
    if(node){
        if(node.left){
            travseBST(node.left,low,high,output);
        }
        if(node.val >= low && node.val <= high){
            output.push(node.val);
        }
        if(node.right){
            travseBST(node.right,low,high,output);
        }
    }
}


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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBSTFastApproach = function(root, low, high) {
    let sum = 0;
    if (root == null) {
        return sum;
    }

    if(root.val >= low && root.val <= high){
        sum += root.val
    }
    sum += rangeSumBST(root.left, low, high);
    sum += rangeSumBST(root.right, low, high);

    return sum;
};