/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = [];
    dfs(root, result);
    return result;
};

const dfs=(node, result) =>{
    if(node == null) return;

    for(let childNode of node.children){
        dfs(childNode, result);
    }

    result.push(node.val);
}
