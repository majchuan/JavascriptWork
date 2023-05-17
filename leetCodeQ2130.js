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
/*
*Reverse list node by using below function
var reverseList = function(head) {
    let prevNode = null ;
    while(head != null){
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head ;
        head = nextNode;
    }
    
    return prevNode
};

*below use fast, slow node approach, it will scan whole listnode, so when fast node is finish. slow node is at the middle of the listNode.
*prev is represent the reverse node which is half of the original listNode.
*then use slow node to keep moving forward, and add the reverseNode value backward at same time.
*/
var pairSumFastApproach = function(head) {
    let slow = head;
    let fast = head;
    let prev = null;

    while(fast && fast.next){
        fast = fast.next.next;
        let nextNode = slow.next;
        slow.next = prev;
        prev=slow;
        slow = nextNode;
    }

    let maxTwinSum = 0 ;

    while(slow){
        maxTwinSum = Math.max(maxTwinSum , slow.val + prev.val )
        slow = slow.next;
        prev = prev.next;
    }

    return maxTwinSum;
};

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
