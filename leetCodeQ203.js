/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let outputNode = head ;
    let prv = new ListNode();
    if(head == null) return head;
    
    while(head != null && head.val == val){
        head = head.next;
    }

    while(outputNode){
        let next = outputNode.next
        if(outputNode.val === val){
          prv.next = next
        }else{
          prv = outputNode;
        }    
        outputNode = next;
    }
    
    return head;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(6);

console.log(removeElements(head,6));