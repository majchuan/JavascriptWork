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
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
    let count = 0;
    
    const dfs=(node,curr,targetSum) =>{
        if(node == null ) return ;

        curr.push(node.val);
        let i = curr.length -1;
        let sum = 0
        while(i>=0){
            sum+=curr[i];
            if(sum == targetSum){
                count++;
            }
            i--;
        }
        
        if(node.left == null && node.right ==null) return;
        
        dfs(node.left, curr.slice(), targetSum);
        dfs(node.right, curr.slice(), targetSum);
        
        return;
    }
    
    dfs(root,[],targetSum);
    
    return count;
};