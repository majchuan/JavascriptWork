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
 var swapNodes = function(head, k) {
    let slow = head;
    let fast = head;
    while (--k) {
        fast = fast.next;
    }
    let first = fast;
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    } 
    [first.val, slow.val] = [slow.val, first.val];
    return head;
    

};

<<<<<<< HEAD
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
 var swapNodesSlowWithArrayApproach = function(head, k) {
=======
var swapNodesSlower = function(head, k) {
    let curr = head;
    let length = 0;
    
    while(curr){
        length++;
        curr=curr.next;
    }
   
    let left = 1;
    curr = head;
    let slow = null;
    let fast = null;
    while(curr){
        if(left == k){
            slow = curr;
        }
        
        if(left == (length - k+1)){
            fast = curr;
        }
        left++;
        curr = curr.next;
    }
    console.log(slow.val, fast.val)
    let temp = slow.val;
    slow.val = fast.val;
    fast.val = temp;
    
    return head;
    

};
 var swapNodesSlowest = function(head, k) {
>>>>>>> 33e96291c844492a203344be5310a078b275ee7d
    let nodes = [];
    let curr = head;
    while(curr){
        nodes.push(curr.val);
        curr = curr.next;
    }
    let totalLength = nodes.length;
    [nodes[k-1],nodes[totalLength - k]] = [nodes[totalLength-k],nodes[k-1]];
    let newNodes = head;
    for(let i = 0 ; i < nodes.length; i++){
        newNodes.next = new ListNode(nodes[i]);
        newNodes = newNodes.next;
    }
    
    return head.next;
};