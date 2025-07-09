/*
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
var widthOfBinaryTreeDFS = function(root) {
   const miniPosition =[0];
   const maxWidth = 0;

   return dfs(root, maxWidth, miniPosition, 0 , 0);
};

const dfs = (node, maxWidth, miniPosition, level, pos)=>{
   if(node == null){
       return maxWidth;
   }

   if(miniPosition[level] == null){
       miniPosition.push(pos);
   }

   let diff = pos - miniPosition[level];
   maxWidth = Math.max(maxWidth,diff+1);
   let leftMaxWidth = dfs(node.left, maxWidth, miniPosition, level+1 , diff*2);
   let rightMaxWidth = dfs(node.right, maxWidth, miniPosition, level+1 , diff* 2 + 1);

   return Math.max(leftMaxWidth , rightMaxWidth);
}

var widthOfBinaryTreeBFS = function(root) {
    if (!root) return 0;
    
    let maxWidth = 0;
    let queue = [[root, 0]];
    
    while (queue.length > 0) {        
        maxWidth = Math.max(maxWidth, queue[queue.length-1][1] - queue[0][1] + 1);
        let offset = queue[0][1];
        let length = queue.length;

        for(let i = 0 ; i < length ; i++){
            let currNode = queue.shift();
            if(currNode[0].left){
                queue.push([currNode[0].left, currNode[1]* 2 - offset]);
            }

            if(currNode[0].right){
                queue.push([currNode[0].right, currNode[1]*2+1 - offset]);
            }
        }

    }
    
    return maxWidth;
   
};
