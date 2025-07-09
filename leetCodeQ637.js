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
var averageOfLevels = function(root) {
    const result =[];
    const level = 0;
    const hash_level ={};
    traversalTree(root, hash_level ,level);
    for(let key in hash_level){
        result.push(hash_level[key][0]/hash_level[key][1]);
    }
    return result;
};

const traversalTree = (node,hash_level,level) =>{
    if(node == null) return null ;
    if(node){
        hash_level[level] ? hash_level[level] = 
            [hash_level[level][0] + node.val, hash_level[level][1]+1 ]: 
            hash_level[level] = [node.val,1];
        
        traversalTree(node.left, hash_level,level+1);
        traversalTree(node.right, hash_level, level+1);
    }
}