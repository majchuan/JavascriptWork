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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    const stack = [root];
    let level = 0 ; 

    if(root.val % 2 == 0) return false;

    while(stack.length > 0){
        const size = stack.length;
        for(let i= 0 ; i < size ; i++){
            const currNode = stack.shift();
            if(level % 2 == 0){
                if(currNode.val % 2 == 0) return false;
                if(size - i > 1){
                    if(currNode.val  >= stack[0].val) return false;
                }    
            }else{
                if(currNode.val % 2 != 0) return false;
                if(size - i > 1){
                    if(currNode.val  <= stack[0].val) return false;
                } 
            }
            if(currNode.left != null) stack.push(currNode.left);
            if(currNode.right != null) stack.push(currNode.right);
        }
        level++;
    }

    return true;
};