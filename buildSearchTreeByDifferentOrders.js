/*
*Build a binary search tree by using preOrder
*Binary search tree is different from binary tree, they both have two nodes, but binary search tree left node < root < right node. 
*/
/*
*@param []
*@return treeNode
*/
const buildBinarySearchTreeByPreorder = (preOrder)=>{
    let root = new TreeNode(preOrder.shift());
    for(let i = 0; i < preOrder.length; i++){
        buildBST(root, preOrder[i]);
    }
    return root;
}

const buildBSTByPreOrder =(node, val) =>{
    if(val < node.val){
        if(node.left){
            buildBST(node.left, val);
        }else{
            node.left = new TreeNode(val);
        }
    }else{
        if(node.right){
            buildBST(node.right, val);
        }else{
            node.right = new TreeNode(val);
        }
    }
}

const BuildBSTByPostOrder =(node, val) =>{
    if(node.val < val){
        if(node.right){
            buildBST(node.right, val);
        }else{
            node.right = new TreeNode(val);
        }
    }else{
        if(node.left){
            buildBST(node.left,val);
        }else{
            node.left = new TreeNode(val);
        }
    }
}

const BuildBSTByStack =(postOrder) =>{
    let root = new TreeNode(postOrder.pop());
    let stack = [];
    stack.push(root);
    for(let i = postOrder.length - 1 ; i >= 0 ; i--){
        let temp = null;
        while(stack.length > 0 && postOrder[i] < stack[stack.length -1].val ){
            temp = stack.pop();
        }

        if(temp == null){
            temp = stack[stack.length -1];
            temp.right = new TreeNode(postOrder[i])
            stack.push(temp.right)
        }else{
            temp.left = new TreeNode(postOrder[i]);
            stack.push(temp.left);
        }
    }

    return root;
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * Q
 * use a preOrder and BFS to build a binary tree, notice this is not a binary search tree. it is a binary tree by 
 * using preOrder. you need insert ## for null means it reach end of the tree.
 * Q297
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return '';

    const queue = [root];
    const resArr = [];
    
    while (queue.length > 0) {
        let currQueue = queue.length;
        
        while (currQueue--) {
            const node = queue.shift();
            
            if (!node) {
                resArr.push('null');
                continue;
            }
            
            resArr.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    
    return resArr.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data || data.length === 0) return null;
    
    const valArr = data.split(',');

    if (valArr.length === 1) return new TreeNode(valArr.shift());
    
    const root = new TreeNode(valArr.shift());
    
    const queue = [root];
    
    for (let i = 0; i < valArr.length; i++) {
        const leaf = queue.shift();
        
        if (valArr[i] !== 'null') {
            const leftLeaf = new TreeNode(valArr[i]);
            leaf.left = leftLeaf;
            queue.push(leftLeaf);
        }
        
        if (valArr[++i] !== 'null') {
            const rightLeaf = new TreeNode(valArr[i]);
            leaf.right = rightLeaf;
            queue.push(rightLeaf);
        }
    }
        
    return root;
};