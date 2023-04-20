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
var longestUnivaluePath = function(root) {
    let maxPath = 0 ;
    const dfs=(node)=>{
        if(node == null) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        let leftPath = 0 , rightPath = 0;
        if(node.left && node.left.val == node.val){
            leftPath += left +1;
        }

        if(node.right && node.right.val == node.val){
            rightPath +=right + 1;
        }

        maxPath = Math.max(maxPath, leftPath + rightPath);
        return Math.max(leftPath, rightPath);
    }
    dfs(root);
    return maxPath;
};
