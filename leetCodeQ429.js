
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const hash_level =[];
    findLevelOrder(root, hash_level, 0);
    return hash_level;
};

const findLevelOrder =(node, hash_level, level) =>{
    if(node == null) return node;
    if(hash_level[level] == null){
        hash_level[level] = [];
    }
    hash_level[level].push(node.val);
    for(let i = 0 ; i < node.children.length; i++){
        findLevelOrder(node.children[i], hash_level, level+1);
    }
   
}

var levelOrderFastest = function(root) {
    if(!root) return [];
    const queue = [root], res = [];
    
    while(queue.length) {
        const len = queue.length;
        const level = [];
        for(let i = 0; i < len; i++) {
            const cur = queue.shift();
            level.push(cur.val);
            queue.push(...cur.children);
        }
        res.push(level);
    }
    
    return res;
};