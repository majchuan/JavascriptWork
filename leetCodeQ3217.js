/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const num_set = new Set(nums);

    while(head != null && num_set.has(head.val)){
        head = head.next;
    }

    if(head == null) return null;

    let currentNode = head;

    while(currentNode.next != null){
        if(num_set.has(currentNode.next.val)){
            currentNode.next = currentNode.next.next;
        }else{
            currentNode = currentNode.next;
        }
    }

    return head;
};