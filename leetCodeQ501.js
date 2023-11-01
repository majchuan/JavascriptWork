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
 * @return {number[]}
 */
var findMode = function(root) {
    const hash_mode = {};
    const result = [];
    searchMode(root, hash_mode);
    
    let maxCounte = 0 ;
    for(let key in hash_mode){
        if(maxCounte <= hash_mode[key]){
            maxCounte = hash_mode[key];
        }
    }
    
    for(let key in hash_mode){
        if(hash_mode[key] == maxCounte){
            result.push(key);
        }
    }
    
    return result;
};

const searchMode =(node ,hash_mode) =>{
    if(node == null) return node;
    
    hash_mode[node.val] ? hash_mode[node.val]++ : hash_mode[node.val] = 1;
    searchMode(node.left, hash_mode);
    searchMode(node.right, hash_mode);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findModeFastFunction = function(root) {

    let modes = [];
    let prev = root;
    let count = 0;
    let max = 0;
      
    function inOrder(node) {
        
        if (node === null) return;
        
        inOrder(node.left);
        
        count = prev.val === node.val ? count + 1 : 1;
        prev = node;
        
        if (count === max) {
            modes.push(node.val);
        }
        else if (count > max) {
            modes = [node.val];
            max = count;
        }
        
        inOrder(node.right);
        
    }
      
      inOrder(root);
      return modes;
  };