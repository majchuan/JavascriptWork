/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let result1 = [];
    let result2 = [];
    dfs(root1,result1, root2, result2);

//console.log(result1, result2);
    if(result1.length != result2.length) return false;
    for(let i = 0; i < result1.length; i++){
        if(result1[i] != result2[i]){
            return false;
        }
    }

    return true;

};

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilarSimpleCompare = function(root1, root2) {
    const result1 = [];
    const result2 = [];

    dfs(root1, result1, root2, result2);
    console.log(result1, result2)
    return result1.join(',') == result2.join(',');
};


const dfs=(node1, result1, node2, result2) =>{
    if(node1 == null && node2 == null) return ; 

    if(node1 != null && node1.left == null && node1.right == null){
        result1.push(node1.val);
    }

    if(node2 != null && node2.left == null && node2.right == null){
        result2.push(node2.val);
    }

    dfs(node1 ? node1.left : node1,result1 , node2 ? node2.left : node2, result2);
    dfs(node1 ? node1.right : node1, result1, node2 ? node2.right : node2 , result2);

    return;

}