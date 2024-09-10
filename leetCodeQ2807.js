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
var insertGreatestCommonDivisors = function(head) {
    let currentNode = head; 
    while(currentNode.next){
        const greatestCommonDivisor = findCommonDivisor(currentNode.val, currentNode.next.val);
        const temp = currentNode.next;
        currentNode.next = new ListNode(greatestCommonDivisor);
        currentNode.next.next = temp;
        currentNode = currentNode.next.next;
    }

    return head;
};

const findCommonDivisor = (num1, num2) =>{
    let smallNumber = num1 > num2 ? num2 : num1;

    while(smallNumber > 0 ){
        if(Number.isInteger(num1/smallNumber) && Number.isInteger(num2/smallNumber)){
            return smallNumber;
        }
        smallNumber--;
    }

    return smallNumber;
}