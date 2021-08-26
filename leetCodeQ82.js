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
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    const hash_listNode = {};
    while(head){
        hash_listNode[head.val] ? hash_listNode[head.val]++ : hash_listNode[head.val] = 1 ;
        head = head.next ;
    }
    
    for(let key in hash_listNode){
        if(hash_listNode[key] > 1){
            delete hash_listNode[key] ;
        }
    }
    
    const listSet = Object.keys(hash_listNode).sort((x,y) => x-y);
    if(listSet.length > 0){
        head = new ListNode(listSet[0]);
        let currentNode = head ;
        for(let i =1; i < listSet.length; i++){
            currentNode.next = new ListNode(listSet[i]);
            currentNode = currentNode.next;
        }
    }
    
    return head;
};

//head = [1,2,3,3,4,4,5],[-3,-1,-1,0,0,0,0,0,2]
const head = new ListNode(-3);
head.next = new ListNode(-1);
head.next.next = new ListNode(-1);
head.next.next.next = new ListNode(0);
head.next.next.next.next = new ListNode(0);
head.next.next.next.next.next = new ListNode(0);
head.next.next.next.next.next.next = new ListNode(0);
head.next.next.next.next.next.next.next = new ListNode(0);
head.next.next.next.next.next.next.next.next = new ListNode(2);

const head1 = null 
console.log(deleteDuplicates(head));