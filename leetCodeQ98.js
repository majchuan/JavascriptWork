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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValidBSTHelp(root, null, null);
};

const isValidBSTHelp = (node, min, max) =>{
    if(node == null) return true;
    if(min != null && node.val <= min) return false;
    if(max != null && node.val >= max) return false;
    return isValidBSTHelp(node.left, min, node.val) && isValidBSTHelp(node.right, node.val , max) ;
}

//use inroder attribute to define this is a binary search tree.
var isValidBSTInorder = function(root) {
    const inOrderArr =[];
    dfs(root,inOrderArr);
    for(let i = 0 ; i< inOrderArr.length-1; i++){
        if(inOrderArr[i] >= inOrderArr[i+1]){
            return false
        }
    }
    return true;
};

const dfs=(node,result) =>{
    if(node == null) return node;
    
    dfs(node.left,result);
    result.push(node.val);
    dfs(node.right,result);
    
    return
}