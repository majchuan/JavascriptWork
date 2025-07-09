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
    let preOrder =[];

    preOrder = buildPreOrder(root, []);
    let data = preOrder.join(',');
    return data

};

const buildPreOrder = (node, result) =>{
    if(node == null) return result;

    result.push(node.val);
    buildPreOrder(node.left, result);
    buildPreOrder(node.right, result);

    return result; 
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data.length ==0) return null;
    const preOrders = data.split(',').map(x => parseInt(x));
    if(preOrders.length == 1) return new TreeNode(preOrders[0]);
    
    let root = new TreeNode(preOrders[0],null,null);
    for (let i = 1; i < preOrders.length; i++)
        buildSearchTree(root, preOrders[i]);
    return root;
};

const buildSearchTree =(node, val) =>{
    if(val < node.val){
        if(node.left){
            buildSearchTree(node.left, val);
        }else{
            node.left= new TreeNode(val);
        }
    }else{
        if(node.right){
            buildSearchTree(node.right,val);
        }else{
            node.right = new TreeNode(val);
        }
    }
}