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
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var maxLevelSum = function(root) {
    const hash_sum = {};
    let maxSumLevel = 0;
    let maxSum = Number.MIN_SAFE_INTEGER ;
    findMaxSum(root, hash_sum, 1);
    for(let key in hash_sum){
        if(maxSum < hash_sum[key]){
            maxSum = hash_sum[key];
            maxSumLevel = parseInt(key);
        }
    }
    return maxSumLevel;
};

const findMaxSum=(node, hash_sum, level)=>{
    if(node == null) return node;
    
    if(hash_sum[level] == null){
        hash_sum[level] = node.val;
    }else{
        hash_sum[level] += node.val;
    }
    
    findMaxSum(node.left, hash_sum, level+1);
    findMaxSum(node.right,hash_sum, level+1);
}


var maxLevelSumFaster = function(root) {
    const levels = {};
    
    const helper = (node, depth) => {
        if (!node) return;
        
        if (!levels[depth]) {
            levels[depth] = 0;
        }
        
        levels[depth] += node.val;
        
        helper(node.left, depth + 1);
        helper(node.right, depth + 1);
    }
    
    helper(root, 1);
    
    let max = 1
        
    for (let level in levels) {
        if (levels[level] > levels[max]) {
            max = level;
        }
    }
    
    return max;
};

// root = [1,7,0,7,-8,null,null]
//[-100,-200,-300,-20,-5,-10,null]
const root = new TreeNode(-100);
root.left = new TreeNode(-200);
root.right = new TreeNode(-300);
root.left.left = new TreeNode(-20);
root.left.right = new TreeNode(-5);
root.right.left = new TreeNode(-10);
console.log(maxLevelSum(root));