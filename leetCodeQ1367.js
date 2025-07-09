/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    if(root == null) return false;
    return dfs(root, head) || isSubPath(head, root.left) || isSubPath(head, root.right);
};

const dfs=(node, listNode) =>{
    if(listNode == null) return true; 

    if(node == null) return false;

    if(node.val != listNode.val) return false;

    return dfs(node.left, listNode.next) || dfs(node.right, listNode.next);
}