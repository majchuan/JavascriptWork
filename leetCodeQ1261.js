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
 */
var FindElements = function(root) {
    this.treeSet = new Set();
    root.val =  0 ;
    const dfs= (node)=>{
        if(node == null){
            return;
        }
        this.treeSet.add(node.val);
        if(node.left){
            node.left.val = 2 * node.val + 1;
        }

        if(node.right){
            node.right.val = 2 * node.val + 2 ;
        }

        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    if(this.treeSet.has(target)) return true;
    return false;
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
