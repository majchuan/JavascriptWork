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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    const inOrder = [];
    dfsInOrder(root,inOrder);
    return createBST(inOrder, 0, inOrder.length -1);
};

const dfsInOrder=(node, inOrder) =>{
    if(node == null) return;
    dfsInOrder(node.left, inOrder);
    inOrder.push(node.val);
    dfsInOrder(node.right, inOrder);
}

const createBST = (inOrder, start , end) =>{

    if(start > end ) return null;

    let mid = Math.floor((start+end)/2);

    const leftSubTree = createBST(inOrder, start, mid -1);
    const rightSubTree = createBST(inOrder, mid+1, end);

    const node = new TreeNode(inOrder[mid], leftSubTree, rightSubTree);

    return node;
}