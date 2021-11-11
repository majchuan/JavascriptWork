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

var hasPathSum = function(root, targetSum) {
    const result=[];
    const paths =[];
    findPathSum(root, result,targetSum, paths);
    return paths
};

const findPathSum =(node, result, targetSum, paths)=>{
    if(node == null) {
        return false;
    }
    result.push(node.val);
    if(node.left == null && node.right == null){
        let sum = result.reduce((x,y) => x+ y,0);
        if(sum == targetSum){
            paths.push(result);
            return true;
        }else{
            return false;
        }
    }
    
    let isNodeLeftTargetSum = findPathSum(node.left, result.slice(), targetSum, paths);
    let isNodeRightTargetSum = findPathSum(node.right,result.slice(), targetSum , paths);
    
    if(isNodeLeftTargetSum || isNodeRightTargetSum){
        return true;
    }else{
        return false;
    }
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