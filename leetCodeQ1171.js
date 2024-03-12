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
var removeZeroSumSublists = function(head) {
    let curr = new ListNode(0,head); 
    let prefixSum = 0 ;
    const hash_sum = new Map();
    hash_sum.set(0,curr);

    while(head != null){
        prefixSum += head.val;
        hash_sum.set(prefixSum, head);
        head = head.next;
    }
    head = curr;
    prefixSum = 0 ;

    while(head != null){
        prefixSum += head.val;
        head.next = hash_sum.get(prefixSum).next;
        head = head.next;
    }

    return curr.next;
};