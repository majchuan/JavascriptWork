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
var CBTInserter = function(root) {
    this.root = root;
    this.currPos = 1;
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
    return bfs(this.root, val);
};

const bfs =(node, val) =>{
    let queue = [node];
    while(queue.length > 0){
        let node = queue.shift();

        if(node.left == null){
            node.left = new TreeNode(val);
            return node.val;
        }else{
            queue.push(node.left);
        }

        if(node.right == null){
            node.right = new TreeNode(val);
            return node.val;
        }else{
            queue.push(node.right);
        }
    }
}

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root;
};

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */