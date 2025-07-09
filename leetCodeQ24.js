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
var swapPairs = function(head) {
    let currNode = head;
    let newHead = head && head.next ? head.next : head;
    
    while(currNode && currNode.next){
        let nextNode = currNode.next;
        let temp = currNode.next.next;
        
        nextNode.next = currNode;
        currNode.next = temp && temp.next ? temp.next : temp;

        currNode = temp;
    }

    return newHead;
};