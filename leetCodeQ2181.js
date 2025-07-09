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
var mergeNodes = function(head) {
    const sums=[];
    let numberOfZeros = 0;
    let sum = 0;
    while(head){
        if(head.val == 0){
            numberOfZeros++;
        }else{
            sum += head.val;
        }

        if(numberOfZeros % 2 == 0){
            sums.push(sum);
            sum = 0;
            numberOfZeros--;
        }

        head = head.next;
    }

    head = new ListNode(sums[0]);
    let curr = head;
    for(let i =1 ; i < sums.length ; i++){
        curr.next = new ListNode(sums[i]);
        curr = curr.next;
    }

    return head;
};