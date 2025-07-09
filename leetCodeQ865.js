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
var subtreeWithAllDeepest = function(root) {
    const resultNode = new TreeNode();
    let depth = 0;
    const maxDepth ={
        depth:-1
    }
    helpDeepest(root,resultNode,depth,maxDepth);
    return resultNode;
};

const helpDeepest=(node, resultNode,depth, maxDepth) =>{
    if(node == null) return depth;

    const leftNodeDepth = helpDeepest(node.left, resultNode, depth+1,maxDepth);
    const rightNodeDepth = helpDeepest(node.right, resultNode, depth+1 , maxDepth);

    if(leftNodeDepth == rightNodeDepth && leftNodeDepth > maxDepth.depth){
        resultNode.val = node.val;
        resultNode.left = node.left;
        resultNode.right = node.right;
        maxDepth.depth = leftNodeDepth;
    }

    return Math.max(leftNodeDepth, rightNodeDepth);
}

function TreeNode(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
}



