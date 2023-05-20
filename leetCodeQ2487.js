/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodesByArray = function(head) {
    let curr = head;
    let prev = null; 
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next; 
    }

    const stack = [];
    while(prev){
        if(stack.length > 0 && stack[0] <= prev.val){
            stack.unshift(prev.val)
        }else if(stack.length == 0){
            stack.unshift(prev.val);
        }
        prev = prev.next;
    }

    curr = head;
    for(let i = 0 ; i < stack.length; i++){
        curr.next = new ListNode(stack[i]);
        curr = curr.next;
    }

    return head.next;
};

var removeNodesRecursion = function(head) {
    let preHead = new ListNode();
    preHead.next = head;

    const traverse = (pre, cur) => {
      if (!cur) return -Infinity;
      if (cur.val < traverse(cur, cur.next)) {
        pre.next = cur.next;
      }
      return pre.next.val;
    }

    traverse(preHead, head);

    return preHead.next;
  };