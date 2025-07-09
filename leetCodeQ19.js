/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let curr = head;
    let length = 0;
    while (curr != null) {
        curr = curr.next;
        length++;
    }
    let del = length - n;

    curr = head;
    let prev = null;
    while (del > 0) {
        prev = curr;
        curr = curr.next;
        del--;
    }

    if (prev === null) {
        // If prev is null, it means we are removing the first node
        head = head.next;
    } else {
        prev.next = curr.next;
    }

    return head;
};

