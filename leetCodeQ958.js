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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let result = [];
    dfs(root, 0, 0 ,result);

    let lastLevels = result[result.length-1];
    for(let i = 0 ; i < result.length-1; i++){
        if(result[i].length != Math.pow(2,i)){
            return false;
        }
    }
    for(let i = 0 ; i < lastLevels.length ; i++){
        if(i != lastLevels[i]){
            return false;
        }
    }
    return true;
};

const dfs=(node, level, position, positions)=>{
    if(node == null) return;

    if(positions[level] == null) positions[level] =[];

    positions[level].push(position);

    if(node.left){
        dfs(node.left, level+1, position * 2, positions);
    }

    if(node.right){
        dfs(node.right, level+1 , position * 2 + 1 , positions);
    }
}