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
 */
 var BSTIterator = function(root) {
    this.result = [];
    traverseInorder(root, this.result);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.result.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.result.length > 0){
        return true;
    }else{
        return false;
    }
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const traverseInorder =(node, result)=>{
    if(node == null) return node;
    
    if(node){
        const leftNode = traverse(node.left,result);
        result.push(node.val);
        const rightNode = traverse(node.right, result);
    }
}

const traversePreoder = (node, result) =>{
    if(node == null) return node ;

    if(node){
        result.push(node.val);
    }
    const leftNode = traversePreorder(node.left,result);
    const rightNode = traversePreoder(node.right,result);
}

const traversePostorder =(node, result) =>{
    if(node == null) return node;
    const leftNode = traversePostorder(node,result);
    const rightNode = traversePostorder(node,result);
    if(node){
        result.push(node.val);
    }
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}