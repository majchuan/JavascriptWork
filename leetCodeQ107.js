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
 * @return {number[][]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 var levelOrderBottom = function(root) {
    const hash_level ={};
    buildLevelOrder(root, hash_level ,0);
    
    return Object.values(hash_level);
};

const buildLevelOrder =(node, hash_level, level)=>{
    if(node == null) return node;
    if(hash_level[level] != null){
        hash_level[level].push(node.val);
    }else{
        hash_level[level] = [];
        hash_level[level].push(node.val);
    }
    buildLevelOrder(node.left,hash_level, level+1);
    buildLevelOrder(node.right, hash_level,level+1);
}

/*
* BFS Search approach
*/
var levelOrderBottomFaster = function(root) {
    if (!root) return [];
    
    const q = [root], ans = [];
    
    while (q.length) {
        const len = q.length, level = [];
        for (let i = 0; i < len; i++) {
            const node = q.shift();
            level.push(node.val);
            
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        ans.unshift(level);
    }
    
    return ans;
};


const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left =new TreeNode(15);
root.right.right= new TreeNode(7);

//console.log(levelOrderBottom(root));
console.log(levelOrderBottomFaster(root));