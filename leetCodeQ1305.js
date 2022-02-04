/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var getAllElements = function(root1, root2) {
    const sortedElements = []
    return helper(root1,root2,sortedElements);
};

const helper = (node1, node2, sortedElements) =>{
    if(node1 == null && node2 == null) return sortedElements;
    if(node1 != null) sortedElements.push(node1.val);
    if(node2 != null) sortedElements.push(node2.val);
    for(let i = 1 ; i < sortedElements.length;  i++){
        let j = i -1 ;
        let key = sortedElements[i];
        while(j >= 0 && sortedElements[j] > key){
            sortedElements[j+1] = sortedElements[j];
            j--;
        }
        sortedElements[j+1] = key ;
    }
    helper(node1 ? node1.left : null, node2 ? node2.left : null,sortedElements);
    helper(node1 ? node1.right : null, node2 ? node2.right : null,sortedElements);
    
    return sortedElements
}

const root1 = [2,1,4], root2 = [1,0,3];
console.log(getAllElements(root1, root2));