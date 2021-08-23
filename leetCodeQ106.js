/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right){
    this.val = (val === undefined ? 0: val);
    this.left =(left === undefined ? null : left);
    this.right =(right === undefined ? null :right); 
}

var buildTree = function(inorder, postorder) {
    return dfs(inorder, postorder);
};

const dfs = (inorder, postorder, postOrderIndex) =>{
    if(inorder.length == 0 ) return null ;
    
    const val = postorder.pop();
    const inorderIndex = inorder.indexOf(val);
    const treeNode = new TreeNode(val);
    treeNode.right= dfs(inorder.slice(inorderIndex+1,inorder.length), postorder);
    treeNode.left = dfs(inorder.slice(0, inorderIndex), postorder);
    return treeNode;
}

const inorder = [9,3,15,20,7], postorder = [9,15,7,20,3];

console.log(buildTree(inorder,postorder));