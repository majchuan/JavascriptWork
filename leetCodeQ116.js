/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    const levels = [];
    checkNextPointer(root, levels, 0);
    return root;
    
};

const checkNextPointer = (node, levels, level) =>{
    if(node == null) return node;
    
    if(levels[level] == null){
        levels[level] = [];
        levels[level].push(node);
    }else{
        levels[level][levels[level].length-1].next = node; 
        levels[level].push(node);
    }
    
    checkNextPointer(node.left, levels, level+1);
    checkNextPointer(node.right, levels, level+1);
}