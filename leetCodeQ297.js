/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    let left ="";
    let right="";
    if(root){
        left = serialize(root.left);
        right = serizlize(root.right);
    }
    
    return root.val +"," +left + "," + right;
};

const dfs =(node) =>{
    let left = null ;
    let right = null ;
    if(node){
        left = node.left != null ? dfs(node.left) : null;
        right = node.right != null ? dfs(node.right) : null;
    }
    
    return node.val +"," + left +"," + right;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let treeNodes = data.split(",");
    return deserializeTree(treeNodes, 0)
};

const deserialzieTree = (nodes, index) =>{
    new TreeNode(nodes[index]);
    this.left = nodes[index+1];
    this.right = nodes[index+2];
    
}
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */