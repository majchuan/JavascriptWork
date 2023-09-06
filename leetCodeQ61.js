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

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRightWithoutToUseArray = function(head, k) {
    let length = 0 ;
    let currNode = head;
    if(head == null) return null;
    while(currNode.next != null){
        length++;
        currNode = currNode.next;
    }
   
    k = k % (length+1);
    
    //two pointer, establish fastNode.
    let fastNode = head;
    for(let i =0; i < k ; i++){
        fastNode = fastNode.next;
    }
    
    //start slowNode from head until fastNode to the end.
    let slowNode = head;
    while(fastNode.next != null){
        fastNode = fastNode.next;
        slowNode = slowNode.next;
    }
    
    //make head to fastNode.next , so fastNode point to head node 
    //make slowNode.next is new head node.
    //make slowNode.next point to null, which means set it to end node.
    fastNode.next = head; 
    const newHeadNode = slowNode.next;
    slowNode.next = null;
    
    return newHeadNode;
};