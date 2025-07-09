/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let currNode = list1;
    let nextNode = null;

    let left = 0 ;

    while(currNode){
        if(left == a-1){
            nextNode = currNode.next;
            currNode.next = list2;
            left++
            break;
        }
        currNode = currNode.next;
        left++;
    }

    while(currNode.next){
        currNode = currNode.next;
    }

    while(nextNode){
        if(left == b){
            currNode.next = nextNode.next;
            nextNode.next = null; 
            break;
        }
        nextNode = nextNode.next; 
        left++;
    }


    return list1;

};