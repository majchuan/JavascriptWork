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
var plusOne = function(head) {
    const st = [];
    let d = 0;

    while(head !== null){
        st.push(head.val);
        head = head.next;
    }
    while(st.length > 0){
        let num = 1 + st.pop() + d;
        d = num >= 10 ? 1 : 0;
        head = new ListNode(num % 10, head);
    }
    if(d == 1)
        head = new ListNode(d, head);
    
    return head;
};