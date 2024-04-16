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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let depth = 0 ;
    const map ={};

    if(root.val == x || root.val ==y) return false;

    dfs(null, root, x, y, depth, map);

    if(map[x] && map[y]){
        if(map[x].value != map[y].value && map[x].depth == map[y].depth){
            return true;
        }
        return false;
    }

    return false;

};

const dfs=(parent, node, x, y, depth, map) =>{
    if(node == null) return;

    if(node.val == x || node.val ==x){
        map[x] ={
            value : parent.val,
            depth : depth
        }
    }

    if(node.val ==y || node.val == y){
        map[y] = {
            value : parent.val,
            depth: depth
        }
    }

    if(map[x] && map[y]) return ;

    dfs(node,node.left, x,y,depth+1, map);
    dfs(node, node.right, x,y, depth+1 ,map);
}