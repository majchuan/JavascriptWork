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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
 var trimBSTFaster = function(root, low, high) {
    if(root == null ) return root;
    
    if(root.val < low ) return trimBST(root.right, low, high);
    if(root.val > high) return trimBST(root.left,low,high);
    root.left = trimBST(root.left,low,high);
    root.right = trimBST(root.right, low ,high);
    
    return root;

};

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
 var trimBSTPreOrderInOrder = function(root, low, high) {
    const inOrders =[];
    const preOrders=[];
    dfsInorder(root, inOrders);
    dfsPreorder(root, preOrders)
    //console.log(inOrders, preOrders);
    const filterInNodes = inOrders.filter(x => x>=low && x <= high);
    const filterPreNodes = preOrders.filter(x => x>= low && x<= high);
    //console.log(filterInNodes, filterPreNodes);
    
    return buildTree(filterInNodes,filterPreNodes);

};

const dfsPreorder =(node, preOrders) =>{
    if(node == null) return node;
    
    preOrders.push(node.val);
    dfsPreorder(node.left,preOrders);
    dfsPreorder(node.right, preOrders);
}

const dfsInorder =(node, inOrders) =>{
    if(node == null) return node;
    dfsInorder(node.left, inOrders);
    inOrders.push(node.val);
    dfsInorder(node.right,inOrders);
}

const buildTree =(inOrder,preOrder)=>{
    if(inOrder.length == 0) return null ;
    const node = new TreeNode();
    
    const preOrderVal = preOrder.shift();
    const inOrderIndex = inOrder.indexOf(preOrderVal);
    node.val = preOrderVal;
    node.left = buildTree(inOrder.slice(0,inOrderIndex), preOrder);
    node.right = buildTree(inOrder.slice(inOrderIndex+1,inOrder.length),preOrder);
    
    return node;
}