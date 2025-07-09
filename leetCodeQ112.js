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
 * @return {boolean}
 */
 
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
var hasPathSum = function(root, targetSum) {
    const result=[];
    return findPathSum(root, result,targetSum);
};

const findPathSum =(node, result, targetSum)=>{
    if(node == null) {
        return false;
    }
    result.push(node.val);
    if(node.left == null && node.right == null){
        let sum = result.reduce((x,y) => x+ y,0);
        if(sum == targetSum){
            return true;
        }else{
            return false;
        }
    }
    
    let isNodeLeftTargetSum = findPathSum(node.left, result.slice(), targetSum);
    let isNodeRightTargetSum = findPathSum(node.right,result.slice(), targetSum);
    
    if(isNodeLeftTargetSum || isNodeRightTargetSum){
        return true;
    }else{
        return false;
    }
}

//root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left =new TreeNode(11);
root.left.left.left= new TreeNode(7);
root.left.left.right= new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);
const targetSum = 22 ;
console.log(hasPathSum(root, targetSum));

/*------------------------------------------------------------------*/

var hasPathSumBetterSolution = function(root, targetSum) {
    
    if(root == null) return false;
    
    return dfs(root, 0, targetSum);
    
};

const dfs=(node,s, targetSum) =>{
    if(node == null) return false;
    s+=node.val;
    if(node.left == null && node.right == null){
        return s == targetSum;
    }
    
    return dfs(node.left, s, targetSum) || dfs(node.right,s, targetSum);
}
