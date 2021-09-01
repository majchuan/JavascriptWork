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
 
var minDepth = function(root) {
    const depth ={
        value : Number.MAX_SAFE_INTEGER
    }
    findMinDepth(root, 1, depth);
    return depth.value; 
};

const findMinDepth = (node, level, depth) =>{
    if(node == null) return node;
    if(node.left == null && node.right == null){
        if(level < depth.value){
            depth.value = level;
        }
    }
    
    
    findMinDepth(node.left, level+1 ,depth);
    findMinDepth(node.right, level+1, depth);
    
}

var minDepthFaster = function(root) {
    let minDepth = Infinity;
    
    if(!root){
        return 0;
    }
    
    const traverse = (node, depth) => {
        if(!node.left && !node.right) {
            return depth;
        }
        
        depth++;
                
        const leftDepth = node.left ? traverse(node.left, depth) : Infinity;
        const rightDepth = node.right ? traverse(node.right, depth) : Infinity;
        minDepth = Math.min(leftDepth, rightDepth);
        return minDepth;
    }
    
    return traverse(root, 1);
};

var minDepthWhileLoop = function(root) {
    if(!root) return 0;
    let que = [root];
    let j = 1;
	// loop until the queue is empty, which will be the worst case
    while(que.length>0){
        const curLen = que.length;
        for(let i=0;i<curLen;i++){
            const pop = que.shift();
			// return the first leaf find
            if(!pop.left && !pop.right) return j;
            if(pop.left) que.push(pop.left);
            if(pop.right) que.push(pop.right);
        }
        j++
    }
    return j;
};
// [3,9,20,null,null,15,7]
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(minDepthWhileLoop(root));