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
 var findSecondMinimumValue = function(root) {
    const setValue = new Set();
    let secondMinimumValue = -1;
    const dfs=(node) =>{
        if(node == null) return node;
        
        dfs(node.left);
        setValue.add(node.val);
        dfs(node.right);
        
        return node;
    }
    
    dfs(root);
    
    return [...setValue].length < 2 ? -1 :  [...setValue].sort((x,y) => x-y)[1]; 
};

if(undefined < 1){
    console.log("undefined > 1");
}else{
    console.log("undefined < 1");
}