/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    const hash_cycle ={};
    let index = 0;
    while(head){
        if(hash_cycle[head] != null){
            console.log(head.val, hash_cycle[head]);
            return head;
        }else{
            hash_cycle[head] = index; 
        }
        
        head = head.next;
        index++;
    }
    
    return null;
};