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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if(root == null) return root;
    
    dfs(root);
    
    return root;
};

const dfs=(node)=>{
    if(node == null) return node; 
    if(node.left == null && node.right == null) return node;
    
    if(node.left == null){
        dfs(node.right); 
    }else{
        const leftNode = dfs(node.left);
        const rightNode = dfs(node.right);

        node.left = null ;
        node.right = leftNode;

        findLastRightNode(node.right, rightNode);
    }
    return node;
}

const findLastRightNode =(node, rightNode) =>{
    if(node.left == null && node.right == null) {
        node.right = rightNode ;
        return node ;
    }
    
    return findLastRightNode(node.right, rightNode);

}

/*
*Fastest approach, dfs the right first, and attached right mode node to left node. then replace this node right node with its left node which alreay finish
* all right node to left node process. 
*/
var flattenFast = function(root) {
    buildNode(root, null)
};

function buildNode(root, prev) {
    if (!root) return prev
    prev = buildNode(root.right, prev)
    prev = buildNode(root.left, prev)

    root.right = prev
    root.left = null

    return root
}