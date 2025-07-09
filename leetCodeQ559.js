/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    return dfs(root,1);
};

const dfs = (node, depth)=>{
    if(node == null) return 0;
    
    if(node.children == null){
        return depth;
    }
    let temp = depth;
    for(let i = 0 ; i < node.children.length; i++ ){
        depth = Math.max(depth , dfs(node.children[i], temp+1));
    }
    
    return depth;
}