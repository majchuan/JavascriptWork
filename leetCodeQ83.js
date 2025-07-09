/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    const sortedSet = new Set();
    while(head){
        sortedSet.add(head.val);
        head = head.next;
    }
    
    const arr = [...sortedSet];
    if(arr.length > 0){
        head = new ListNode(arr[0]);
        let currentNode = head;
        for(let i = 1 ; i< arr.length; i++){
            currentNode.next = new ListNode(arr[i]);
            currentNode = currentNode.next;
        }
    }
    return head;
};

const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);
console.log(deleteDuplicates(head));