/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right){
    this.val = (val === undefined ? 0: val);
    this.left =(left === undefined ? null : left);
    this.right =(right === undefined ? null :right); 
}

var buildTree = function(preorder, inorder) {
    const root = dfsBuildTree(preorder,inorder);
    return root;
};

const dfsBuildTree = (preorder, inorder)=>{
    if(inorder.length == 0) return null

    const val = preorder.shift();
    const inorderIndex = inorder.indexOf(val);
    const node = new TreeNode(val);
    node.left = dfsBuildTree(preorder,inorder.slice(0,inorderIndex));
    node.right= dfsBuildTree(preorder,inorder.slice(inorderIndex+1, inorder.length));
    return node;
}

const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];
console.log(buildTree(preorder,inorder));


var buildTreeWithStack = function(preorder, inorder) {
    const root = new TreeNode(preorder[0]);
    const stack = [root];
    
    let inOrderIndex = 0;
    let preOrderIndex = 1;
    
    while (stack.length > 0) {
        let node = null;
        const curr = stack[stack.length-1];
        
        if (curr.val !== inorder[inOrderIndex]) {
            node = new TreeNode(preorder[preOrderIndex++]);
            curr.left = node;
        }
        else {
            inOrderIndex++;
            if (inOrderIndex === inorder.length) break;
            
            stack.pop();
            
            if (stack.length > 0 && stack[stack.length-1].val === inorder[inOrderIndex]) continue;
            
            node = new TreeNode(preorder[preOrderIndex++]);
            curr.right = node;
        }
        stack.push(node);
    }
    
    return root;
};