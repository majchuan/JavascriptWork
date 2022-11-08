/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let nodeLength = 0;
    let currNode = head;
    while(currNode != null){
        nodeLength++;
        currNode = currNode.next;
    }
    
    if(nodeLength == 1){
        if(nodeLength == n){
            return null;
        }
    }
    currNode = head;
    let count = 0;
    while(currNode != null)
        {
            count++;
            if(nodeLength - n == 0){
                head = currNode.next;
                currNode.next =null;
            }
            if(count == (nodeLength - n)){
                console.log(count);
                if(currNode.next && currNode.next.next){
                    currNode.next = currNode.next.next; 
                }else{
                    currNode.next = null ;
                }
            }
            
            if(currNode != null){
                currNode = currNode.next;
            }
        }
    return head;
};

