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

    let temp = slow.val;
    slow.val = fast.val;
    fast.val = temp;
    
    return head;
    

};
 var swapNodesSlowest = function(head, k) {
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

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodesFast = function(head, k) {
    let left = head
    for (let i = 0; i < k - 1; i++) {
        left = left.next
    }
    
    let temp = left
    let right = head
    while (temp.next) {
        temp = temp.next
        right = right.next
    }

    [right.val, left.val] = [left.val, right.val]

    return head
};
