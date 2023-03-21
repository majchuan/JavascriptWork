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
var findTarget = function(root, k) {
    const hash_node ={};
    return dfs(root, hash_node, k);
};

const dfs=(node, hash_node, k) =>{
    if(node == null) return false;

    if(hash_node[k-node.val]){
        return true;
    }else{
        hash_node[node.val] = true;
    }
    return dfs(node.left, hash_node, k) || dfs(node.right, hash_node, k);
}

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
var findTargetPreOrderApproach = function(root, k) {
    const preOrders = [];
    const hash_k ={};
    dfsPreOrder(root, preOrders);

    for(let num of preOrders){
        if(hash_k[k-num] != null){
            return true;
        }else{
            hash_k[num] = true;
        }
    }

    return false;
};

const dfsPreOrder=(node, preOrders) =>{
    if(node == null) return null;

    preOrders.push(node.val);
    dfsPreOrder(node.left, preOrders);
    dfsPreOrder(node.right, preOrders);

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