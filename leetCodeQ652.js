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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const result = [];
    const hash_nodes ={};
    dfs(root, hash_nodes, result);

    return result;
};

const dfs=(node, hash_nodes ,result)=>{
    if(node == null) return " ";
    
    let left = dfs(node.left, hash_nodes, result);
    let right = dfs(node.right, hash_nodes, result);
    let curr = node.val +" "+ left +" "+ right; 
    hash_nodes[curr] ? hash_nodes[curr]++ : hash_nodes[curr] = 1 ;

    if(hash_nodes[curr] == 2){
        result.push(node);
    }

    return curr ;
    
}
