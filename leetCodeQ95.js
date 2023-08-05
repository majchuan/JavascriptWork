/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    return dfs(1,n);
};

const dfs= (left ,right )=>{
    const result = [];
    if(left > right){
        result.push(null);
        return result;
    }

    for(let i = left ; i <= right ; i++){
        const leftNodes = dfs(left, i-1);
        const rightNodes = dfs(i+1, right);
        for(let leftNode of leftNodes){
            for(let rightNode of rightNodes){
                result.push(new TreeNode(i,leftNode, rightNode));
            }
        }
    }
    return result;
}