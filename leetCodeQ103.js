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

var zigzagLevelOrder = function(root) {
    const hash_zigzag = {};
    findZigzagLevelOrder(root, hash_zigzag, 1);
    return Object.values(hash_zigzag);
};

const findZigzagLevelOrder =(node,hash_zigzag, level) =>{
    if(node == null) return node ;
    if(hash_zigzag[level] ==null){
        hash_zigzag[level] =[];
    }
    if(level % 2 == 0){
        hash_zigzag[level].unshift(node.val);
    }else{
        hash_zigzag[level].push(node.val);
    }
    findZigzagLevelOrder(node.left, hash_zigzag,level+1);
    findZigzagLevelOrder(node.right, hash_zigzag, level+1);
}

var zigzagLevelOrderFastest = function(root) {
    var result = [];
    helper(root)
    function helper(node ,level = 0){
        //Base condition
        if(!node)return;
        
        if(!result[level]){result[level] = []}
        
        if(level %2 !==0){
            result[level].unshift(node.val)
        }else{
            result[level].push(node.val)
        }
        
        helper(node.left , level +1);
        helper(node.right , level +1);
        
    }

    return result
    console.log(result)
};

var zigzagLevelOrderFaster = function(root) {
    if (!root) return []
    const [res, queue] = [[[root.val]], [root]]
    let reverse = true
    while (queue.length) {
        const [level, {length}] = [[], queue]
        for (let i=0; i<length; i++) {
            const current = queue.shift()
            if (current.left) {
                queue.push(current.left)
                level.push(current.left.val)
            }
            if (current.right) {
                queue.push(current.right)
                level.push(current.right.val)
            }
        }
        level.length && res.push(reverse ? level.reverse() : level)
        reverse = !reverse
    }
    return res
};
//[1,2,3,4,null,null,5]
const root = new TreeNode(1);
root.left= new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);
console.log(zigzagLevelOrder(root));