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
 * @param {number} val
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var searchBST = function(root, val) {
    return findTargetNode(root,val);
};

const findTargetNode =(node, val) =>{
    if(node == null) return node;
    
    if(node.val == val){
        return node;
    }
    const leftNode = findTargetNode(node.left,val);
    const rightNode = findTargetNode(node.right,val);
    
    if(leftNode){
        return leftNode;
    }
    
    if(rightNode){
        return rightNode;
    }
    
    if(!leftNode && !rightNode){
        return null;
    }
    
}

var searchBSTFaster = function(root, val) {
    if(root === null) return null;
    if(root.val === val) return root;
    
    if(val< root.val){
        return searchBST(root.left, val);
    }
    else{
        return searchBST(root.right, val);
    }
};

//[18,2,22,null,null,null,63,null,84,null,null] 63

const root = new TreeNode(18);
root.left = new TreeNode(2);
root.left.left = new TreeNode(22);
root.right = new TreeNode(63);
root.right.right = new TreeNode(84);
console.log(searchBST(root, 63));