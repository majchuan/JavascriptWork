/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let decimal = "";
    return parseInt(caculation(head,decimal),2);
    
};

const caculation =(node, decimal) =>{
    if(node == null) return decimal ;
    decimal += node.val.toString();
    decimal = caculation(node.next, decimal);
    return decimal;
    
}