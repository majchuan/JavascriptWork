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
 * @return {number}
 */
/*
*BFS 
*/
 var countNodesBFS = function(root) {
    if(root == null) return 0;
    
    const queue=[root];
    let nodeNum = 1 ;
    
    while(queue.length> 0){
        const currLen = queue.length;
        for(let i = 0; i< currLen ; i++){
            const node = queue.pop();
            if(node.left){
                queue.push(node.left);
                nodeNum++;
            }
            if(node.right){
                queue.push(node.right);
                nodeNum++;
            }
        }
    }
    
    return nodeNum;
};

/*
*DFS
*/
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
 * @return {number}
 */
 var countNodesDFS = function(root) {
    if(root == null) return 0 ;
    
    return 1+countNodes(root.left) + countNodes(root.right);
};
