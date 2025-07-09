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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    const node = getNode(root,null,start);
    return getMinitues(node, 0);
};

const getNode = (node, parent, start) =>{
    if(node == null) return ;

    node.parent = parent; 

    if(node.val == start){
        //console.log(node.val);
        return node;
    }
    return getNode(node.left, node, start) || getNode(node.right, node,start);
}

const getMinitues =(node,minitues) =>{
    if(node == null || node.visited ) return minitues -1 ;

    node.visited = true;

    return Math.max(
        getMinitues(node.left, minitues+1), 
        getMinitues(node.right, minitues+1),
        getMinitues(node.parent, minitues+1)
    );
}