/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    const curr = [];
    let node = head;
    while(node != null){
        curr.push(node.val);
        node = node.next;
    }
    
    let slow = 0;
    let fast = 0;
    node = head;
    while(node && fast < curr.length -2){
        const currNode = new ListNode(curr[curr.length-slow-1]);
        let temp = node.next; 
        node.next= currNode ;
        currNode.next = temp;
        slow++;
        fast = fast+2;
        node = node.next.next;
    }
    
    slow = 0 ;
    while(head){
        if(slow == curr.length-1){
            head.next = null;
        }
        head = head.next;
        slow++;
    }
};