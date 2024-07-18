/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
*Lowest Common Ancestor 
*/

/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    if(root == null) return 0;

    let result = 0 ; 

    const dfs=(node)=>{
        if(node == null) return [];
        if(node.left == null && node.right == null) return [0];

        const leftDistance = dfs(node.left);
        const rightDistance = dfs(node.right);

        for(const left of leftDistance){
            for(const right of rightDistance){
                if(left + right + 2 <= distance){
                    result++;
                }
            }
        }

        const distances = [];
        for(const left of leftDistance){
            distances.push(left+1);
        }

        for(const right of rightDistance){
            distances.push(right+1);
        }

        return distances;
    }

    dfs(root);

    return result;

};
