/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let mergeNode = head;
    
    while(list1 != null && list2 != null){
        if(list1.val < list2.val){
            mergeNode.next = list1;
            list1 = list1.next;
            mergeNode = mergeNode.next;
        }else{
            mergeNode.next = list2;
            list2 = list2.next;
            mergeNode = mergeNode.next;
        }
    }
    
    while(list1 != null){
        mergeNode.next = list1 ;
        mergeNode = mergeNode.next;
        list1 = list1.next;
    }
    
    while(list2 != null){
        mergeNode.next = list2;
        mergeNode = mergeNode.next;
        list2 = list2.next;
    }
    
    return head.next;
};