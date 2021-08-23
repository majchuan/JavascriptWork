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
 * @param {number} k
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
var findTarget = function(root, k) {
    const hash_k ={};
    dfs(root,k , hash_k);

    for(let key in hash_k){
        if(hash_k[key]) return true;
    }

    return false;
};

const dfs = (node, k , hash_k) =>{

    if(node == null) {
        return null ;
    }

    const leftNode = dfs(node.left, k , hash_k) ;
    if(hash_k[k-node.val] != null){
        hash_k[node.val] = true ;
        hash_k[k-node.val] = true;
    }else{
        hash_k[node.val] = false;
    }
    const rightNode = dfs(node.right, k, hash_k);
}

root = [5,3,6,2,4,null,7], k = 9

const node = new TreeNode(5);
node.left = new TreeNode(3);
node.right = new TreeNode(6);
node.left.left = new TreeNode(2);
node.left.right = new TreeNode(4);
node.right.left = null ;
node.right.right = new TreeNode(7);

console.log(findTarget(node, k));