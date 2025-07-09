/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteMiddle = function(head) {
    const curr = [];
    let node = head;
    while(node){
        curr.push(node.val);
        node = node.next;
    }
    
    if(curr.length == 1) return null;
    const midIndex = Math.floor(curr.length / 2) ;
    
    node = head;
    let slow = 0;
    while(node){
        if(slow == midIndex - 1 ){
            let temp = node.next.next;
            node.next.next = null;
            node.next = temp;
            break;
        }
        node = node.next;
        slow++;
    }
    
    return head;
};
/*
*two pointers, one slow and one fast. since fast is twice move head than slow, so when fast loop end, the slow just one step behand the middle node.
*then we just remove middle node.
*/
var deleteMiddleTwoPointers = function(head) {
    if(head == null || head.next == null) return null;

    const slowNode = head;
    const fastNode=  head.next.next;
    while(fast && fastNode.next){
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    
    let temp = slowNode.next.next;
    slowNode.next.next = null ;
    slowNode.next = temp;

    return head;
};