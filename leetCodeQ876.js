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
var middleNode = function(head) {
    if(head == null || head.next == null) return head;
    let slowNode = head;
    let fastNode = head.next.next;
    
    while(fastNode && fastNode.next){
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    
    return slowNode.next; 
};