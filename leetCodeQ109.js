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
 * @return {TreeNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var sortedListToBST = function(head) {
    const sortedArray = [];
    while(head){
        sortedArray.push(head.val);
        head = head.next;
    }
    
    if(sortedArray.length != 0){
        return buildBinarySearchTree(new TreeNode(), sortedArray);
    }else{
        return new TreeNode();
    }
    
};

const buildBinarySearchTree =(node,nums) =>{
    if(nums.length==0){
        return null;
    }
    if(nums.length ==1){
        return new TreeNode(nums[0]);
    }
    let midIndex = Math.floor(nums.length/2);
    node = new TreeNode(nums[midIndex]);
    node.left =buildBinarySearchTree(node.left, nums.slice(0,midIndex));
    node.right = buildBinarySearchTree(node.right, nums.slice(midIndex+1,nums.length));
    return node;
}
//head = [-10,-3,0,5,9]
const head = new ListNode(-10);
head.next = new ListNode(-3);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(9);

console.log(sortedListToBST(head));