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
 var reverseOddLevels = function(root) {
    dfs(root.left, root.right, 1);
    return root;
};

const dfs =(leftNode, rightNode, levelNum) =>{
    if(leftNode == null && rightNode == null) return;

    if(levelNum % 2 == 1){
        let tempNodeVal = leftNode.val;
        leftNode.val = rightNode.val;
        rightNode.val = tempNodeVal;
    }
    dfs(leftNode.left, rightNode.right , levelNum+1);
    dfs(leftNode.right, rightNode.left, levelNum+1);

    return;
}