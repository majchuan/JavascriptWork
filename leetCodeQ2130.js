/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    const stack = [] ; 
    while(head != null){
        stack.push(head.val);
        head = head.next;
    }

    let left = 0;
    let right = stack.length-1;
    let maxTwinSum = 0
    while(left < right){
        let twinSum = stack[left] + stack[right];
        maxTwinSum = Math.max(twinSum, maxTwinSum);
        left++;
        right--;
    }

    return maxTwinSum;
};