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
 * @param {number} targetSum
 * @return {number[][]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var pathSum = function(root, targetSum) {
    const result=[];
    findPathSum(root, [], result, 0 ,targetSum);
    return result;
};

const findPathSum =(node, curr , result, s , targetSum)=>{
    if(node == null) {
        return ;
    }
    curr.push(node.val);
    s+=node.val;
    if(node.left == null && node.right == null){
        if(s == targetSum){
            result.push(curr);
        }
        return;
    }
    
    findPathSum(node.left, curr.slice(), result,s, targetSum);
    findPathSum(node.right,curr.slice(),result,s, targetSum);
    
    return;
}


const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left =new TreeNode(11);
root.left.left.left= new TreeNode(7);
root.left.left.right= new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);
const targetSum = 22 ;
console.log(hasPathSum(root,targetSum));