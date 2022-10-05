/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let carryOnNum = 0 ; 
    let resultNode = new ListNode(); 
    let currNode = resultNode;
    while(l1 != null || l2 != null ){
        let num1 = l1 == null ? 0 : l1.val ;
        let num2 = l2 == null ? 0 : l2.val ;
        
        if(num1 + num2 > 9){
            currNode.val = parseInt((num1+ num2 + carryOnNum).toString()[1]);
            carryOnNum = 1 ;
        }else{
            if(num1 + num2 + carryOnNum < 10 ){
                currNode.val = num1+ num2 + carryOnNum;
                carryOnNum = 0;
            }else{
                currNode.val = parseInt((num1+ num2 + carryOnNum).toString()[1]);
                carryOnNum = 1 ;
            }
        }
        
        l1 = l1 == null ? null : l1.next;
        l2 = l2 == null ? null : l2.next;
        if(l1 != null || l2 != null){
            currNode.next = new ListNode();
            currNode = currNode.next;
        }
        
    }
    if(carryOnNum == 1){
        currNode.next = new ListNode(carryOnNum);
        currNode = currNode.next;
    }
    return resultNode; 
};