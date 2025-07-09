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
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var bstFromPreorder = function(preorder) {
    const stack =[];
    const root =  new TreeNode(preorder[0]);
    stack.push(root);
    for(let i =1 ; i< preorder.length; i++){
        let temp = null;

        while(stack.length > 0 && preorder[i] > stack[stack.length-1].val){
            temp = stack.pop();
        }

        if(temp == null){
            temp = stack[stack.length-1];
            temp.left = new TreeNode(preorder[i]);
            stack.push(temp.left);
        }else{
            temp.right = new TreeNode(preorder[i]);
            stack.push(temp.right);
        }
    }

    return root;
}

const  preorder = [8,5,1,7,10,12];
console.log(bstFromPreorder(preorder));