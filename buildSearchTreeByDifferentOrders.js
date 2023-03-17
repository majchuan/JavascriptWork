/*
*Build a binary search tree by using preOrder
*Binary search tree is different from binary tree, they both have two nodes, but binary search tree left node < root < right node. 
*/
/*
*@param []
*@return treeNode
*/
const buildBinarySearchTreeByPreorder = (preOrder)=>{
    let root = new TreeNode(preOrder.shift());
    for(let i = 0; i < preOrder.length; i++){
        buildBST(root, preOrder[i]);
    }
    return root;
}

const buildBSTByPreOrder =(node, val) =>{
    if(val < node.val){
        if(node.left){
            buildBST(node.left, val);
        }else{
            node.left = new TreeNode(val);
        }
    }else{
        if(node.right){
            buildBST(node.right, val);
        }else{
            node.right = new TreeNode(val);
        }
    }
}

const BuildBSTByPostOrder =(node, val) =>{
    if(node.val < val){
        if(node.right){
            buildBST(node.right, val);
        }else{
            node.right = new TreeNode(val);
        }
    }else{
        if(node.left){
            buildBST(node.left,val);
        }else{
            node.left = new TreeNode(val);
        }
    }
}

const BuildBSTByStack =(postOrder) =>{
    let root = new TreeNode(postOrder.pop());
    let stack = [];
    stack.push(root);
    for(let i = postOrder.length - 1 ; i >= 0 ; i--){
        let temp = null;
        while(stack.length > 0 && postOrder[i] < stack[stack.length -1].val ){
            temp = stack.pop();
        }

        if(temp == null){
            temp = stack[stack.length -1];
            temp.right = new TreeNode(postOrder[i])
            stack.push(temp.right)
        }else{
            temp.left = new TreeNode(postOrder[i]);
            stack.push(temp.left);
        }
    }

    return root;
}