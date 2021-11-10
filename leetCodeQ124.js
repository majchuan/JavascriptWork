/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    if(root == null) {
        return 0
    }    
    let result =Number.MIN_SAFE_INTEGER; 
    const dfs = (node) => {
        if(node == null){
            return 0;
        } 
        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));
        result = Math.max(result, left + right + node.val);
        return Math.max(left, right) + node.val;
     }     
    dfs(root);
    return result;    
};


/*-----------------------------------------------------------------------------------------*/
var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER ;
    return findMaxSum(root, maxSum);
};

const findMaxSum = (node, maxSum) =>{
    let nodeSum = 0;
    
    if(node == null) return maxSum ;
    
    if(node){
        if(node.left && node.right){
            let leftNode = node.left ? node.left : new TreeNode();
            let rightNode = node.right ? node.right : new TreeNode();

            nodeSum = leftNode.val + node.val + rightNode.val;
            maxSum = Math.max(maxSum, nodeSum);

            let maxSumLeft = findMaxSum(node.left, maxSum);
            let maxSumRight = findMaxSum(node.right, maxSum);

            maxSum = Math.max(maxSumLeft, maxSumRight);
        }else{
            if(node.left){
                nodeSum = node.val + node.left.val;
                maxSum = Math.max(maxSum,nodeSum);
                maxSum = Math.max(maxSum, findMaxSum(node.left,maxSum))
            }
            if(node.right){
                nodeSum = node.val + node.right.val;
                maxSum =Math.max(maxSum, nodeSum);
                maxSum = Math.max(maxSum, findMaxSum(node.right,maxSum));
            }
        }
    }
    
    return maxSum ;
}