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
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var rightSideView = function(root) {
    const levels =[];
    helper(root, levels, 0);
    return levels; 
};

const helper =(node,levels, level) =>{

    if(node == null) return node;

    levels[level] = node.val;

    const leftNode = helper(node.left, levels, level+1);
    const rightNode = helper(node.right, levels, level+1);

    return node;
}

const rightSideViewBFS =(root) =>{
    const queue = [root];
    let level = 0;
    const result = [] ;
    
    if(root == null) return result;
    
    while(queue.length > 0){
        const currLength = queue.length;
        for(let i = 0 ; i < currLength ; i++){
            const currNode = queue.shift();
            result[level] = currNode.val;
            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);
        }
        level++;
    }

    return result; 
}

//[1,2,3,null,5,null,4]

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);

console.log(rightSideView(root));
console.log(rightSideViewBFS(root));