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
var sumOfLeftLeaves = function(root) {
    if(root != null && root.left == null && root.right == null){
        return 0;
    }
    return dfs(root.left, 0) + dfs(root.right,1);
};

const dfs=(node, direction) =>{
    if(node == null) return 0 ;
    
    if(node != null && node.left == null && node.right == null){
        if(direction == 0){
            return node.val;
        }else{
            return 0 ;
        }
    }

    let leftNodeVal = 0 ;
    let rightNodeVal = 0 ;
    leftNodeVal += dfs(node.left, 0);
    rightNodeVal += dfs(node.right, 1);

    return leftNodeVal+rightNodeVal;
}