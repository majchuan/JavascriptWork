/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let node = head;
    let prevNodeVal = head.val;
    const distanceIndexs = [];
    let index = 1 ;
    let minDistance = Number.MAX_SAFE_INTEGER;
    while(node.next){
        let nextNodeVal = node.next.val;
        if(node.val < prevNodeVal && node.val < nextNodeVal){
            distanceIndexs.push(index);
        }
        if(node.val > prevNodeVal && node.val > nextNodeVal){
            distanceIndexs.push(index);
        }
        if(distanceIndexs.length >= 2){
            minDistance = Math.min(
                minDistance, 
                distanceIndexs[distanceIndexs.length -1] - distanceIndexs[distanceIndexs.length -2]);
        }
        prevNodeVal = node.val;
        node = node.next;
        index++;
    }

    if(distanceIndexs.length >= 2){
        let length = distanceIndexs.length;
        return [minDistance, distanceIndexs[length-1] - distanceIndexs[0]];
    }else{
        return [-1,-1];
    }
};