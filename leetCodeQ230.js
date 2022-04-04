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
 * @param {number} k
 * @return {number}
 */
/*
*DFS
*/
var kthSmallest = function(root, k) {
  let counter = 0;
  let minValue = 0;

  const dfs=(node) =>{
      if(node == null) return node;

      dfs(node.left);
      counter++;
      if(counter == k) return minValue = node.val;
      dfs(node.right);

      return;
  }

  dfs(root);
 
  return minValue; 

};

/*
*BFS
*/
const kthSmallestBFS =(root, k) =>{
    if(!root) {
        return 0
    }
    let stack = []
    
    let node = root
    
    while(node !== null || stack.length > 0) {
        while(node) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        k--
        if(k===0) {
            return node.val
        }
        node = node.right
    }
}