/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let counter = 0;
    if(head == null || head.next == null || left >= right) return head;
    
    let newHead = new ListNode(0,head);
    let leftNode = newHead;
    
    while(leftNode != null && counter < left-1){
        leftNode = leftNode.next;
        counter++;
    } 
    let rightNode = leftNode;

    while(rightNode != null && counter <= right){
        rightNode = rightNode.next;
        counter++;
    }
    
    if(leftNode.next == null) return head; 
    
    let currNode = leftNode.next; 
    
    for(let i = left ; i <= right ; i++){
        let temp = currNode.next; 
        currNode.next = rightNode ;
        rightNode = currNode;
        currNode = temp;
    }
    
    leftNode.next = rightNode;
    
    return newHead.next;
    
};

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetweenFastApproach = function(head, left, right) {
    let temp = new ListNode(0, head);
    let prev = temp;
    for(let i = 1; i < left; i++) prev = prev.next
    let curr = prev.next
    for(let i = left; i < right; i++){
        let nextNode = curr.next
        curr.next = nextNode.next
        nextNode.next = prev.next
        prev.next = nextNode
    }
    return temp.next
};