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
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    const sums = new Map();
    const nodeValues = new Map();

    calculateSum(root, 0 , sums, nodeValues);
    UpdateTreeNode(root, 0 , null, sums, nodeValues);
    return root;
};

const calculateSum=(node, level, sums ,nodeValues)=>{
    if(node == null) return;

    nodeValues.set(node, node.val);

    if(sums.has(level) == false){
        sums.set(level,0);
    }

    sums.set(level, node.val + sums.get(level));
    calculateSum(node.left, level+1 , sums, nodeValues);
    calculateSum(node.right, level+1, sums, nodeValues);
}

const UpdateTreeNode = (node, level, parentNode, sums, nodeValues) =>{
    if(node == null) return;

    if(parentNode == null){
        node.val = 0 ;
    }else{
        let sum = sums.get(level);
        const left = parentNode.left;
        const right = parentNode.right;

        if(left != null){
            sum -= nodeValues.get(left);
        }
        if(right != null){
            sum -= nodeValues.get(right);
        }
        node.val = sum;
    }

    UpdateTreeNode(node.left, level+1, node, sums,nodeValues);
    UpdateTreeNode(node.right, level+1 , node , sums, nodeValues);
}