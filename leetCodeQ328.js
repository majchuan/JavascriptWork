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
 var oddEvenList = function(head) {
    const oddResult = [];
    const evenResult = [];
    let odd = 1 ;
    let currNode = head;
    while(currNode != null){
        if(odd % 2 != 0){
            oddResult.push(currNode.val);
        }else{
            evenResult.push(currNode.val)
        }
        currNode = currNode.next;
        odd++;
    }
    
    const fullResult = [...oddResult, ...evenResult];
    //console.log(fullResult);
    let startNode = new ListNode();
    let oldEvenNode = startNode ; 
    for(let i = 0 ; i < fullResult.length; i++){
        oldEvenNode.next = new ListNode(fullResult[i]);
        oldEvenNode = oldEvenNode.next;
    }
    
    return startNode.next;
};

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
 var oddEvenListNode = function(head) {
    let startNode = new ListNode();
    let endNode = new ListNode();
    let oddNode = startNode;
    let evenNode = endNode;
    let odd = 1 ;
    
    while(head != null){
        if(odd % 2 != 0){
            oddNode.next = head ; 
            oddNode = oddNode.next;
        }else{
            evenNode.next = head;
            evenNode= evenNode.next;
        }
        
        head = head.next;
        odd++;
    }
    evenNode.next = null ; 
    oddNode.next = endNode.next; 
    
    return startNode.next;
    
};

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
 var oddEvenListFastest = function(head) {
    if (!head) return head;

  var odd = head;
  var even = head.next;
  while (odd.next && odd.next.next) {
    var tmp = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    tmp.next = odd.next;
  }
  odd.next = even;
  return head;
    
};