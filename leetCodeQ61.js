/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    const updateArr = [];
    const rotateArr = [];
    
    while(head != null){
        updateArr.push(head.val);
        head = head.next;
    }
    
    if(updateArr.length > 0){
        for(let i = 0; i<updateArr.length ; i++){
            let newIndex = (i + k) % updateArr.length;
            rotateArr[newIndex] = updateArr[i];
        }
        
        let newHead = new ListNode(rotateArr[0]);
        let currentHead = newHead;
        for(let i =1 ; i < rotateArr.length; i++){
            currentHead.next = new ListNode(rotateArr[i]);
            currentHead = currentHead.next ;
        }
        
        return newHead;
    }else{
        return head;
    }
    
};
