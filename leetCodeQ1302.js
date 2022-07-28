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
 * @return {number}
 */
 var deepestLeavesSum = function(root) {
    const hash_level = [];
    dfs(root,0, hash_level);
    //console.log(hash_level);
    return hash_level[hash_level.length -1];
};

const dfs =(node , level , hash_level) =>{
    if(node == null){
        return node;
    }
    
    if(hash_level[level]){
        hash_level[level] += node.val;
    }else{
        hash_level[level]=node.val
    }
    
    dfs(node.left, level+1 , hash_level);
    dfs(node.right, level+1, hash_level);
    
}