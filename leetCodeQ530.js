/**
 * @param {TreeNode} root
 * @return {number}
 */
 var getMinimumDifference = function(root) {
    let prev = -Infinity, minDiff = Infinity;
    const recursive = (node) => {
        if(!node) return;
        recursive(node.left);
        minDiff = Math.min(minDiff, node.val - prev);
        prev = node.val;
        recursive(node.right);
    }
    recursive(root);
    return minDiff;
};

var getMinimumDifferenceInorder = function(root) {
    const result = [];
    const dfs = (node) =>{
        if(node == null){
            return null;
        }
        
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    
    dfs(root);
    
    let minimumValue = Number.MAX_SAFE_INTEGER;
    for(let i = 0 ; i < result.length-1; i++){
        minimumValue = Math.min(minimumValue, result[i+1]- result[i]);
    }
    return minimumValue;
};
