/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    const result = [];
    for(let listNode of lists){
        let currentNode = listNode;
        while(currentNode != null){
            result.push(currentNode.val);
            currentNode = currentNode.next;
        }
    }
    if(result.length != 0){
        result.sort((x,y) => x-y);
        let head = new ListNode(result[0]);
        let currentNode = head;
        for(let i =1 ; i < result.length; i++){
            currentNode.next = new ListNode(result[i]);
            currentNode = currentNode.next;
        }
        return head;
    }else{
        return null;
    }
    
};