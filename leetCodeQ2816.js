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
var doubleIt = function(head) {
    let num = BigInt(0);
    while(head != null){
        num = (num + BigInt(parseInt(head.val))) * 10n;
        head = head.next;
    }
    num = num / 10n * 2n ;

    const nums = num.toString().split('');

    let currHead = new ListNode(nums[0]);
    let currNode = currHead;
    for(let i = 1 ; i < nums.length; i++){
        currNode.next = new ListNode(nums[i]);
        currNode = currNode.next;
    }

    return currHead;
};