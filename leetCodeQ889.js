/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var constructFromPrePost = function(preorder, postorder) {
    const root = dfsBuildTree(preorder,postorder);
    return root;
};

const dfsBuildTree =(preorder, postorder) =>{
    if(postorder.length == 0) return null ;

    const nodeVal = preorder.shift();
    const node = new TreeNode(nodeVal);
    const postorderIndex = postorder.indexOf(preorder[0]);
    node.left = dfsBuildTree(preorder, postorder.slice(0,postorderIndex+1));
    
    node.right = dfsBuildTree(preorder, postorder.slice(postorderIndex+1,postorder.length-1));

    return node;
}

const preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1];
console.log(constructFromPrePost(preorder,postorder));