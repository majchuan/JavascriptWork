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
 var reverseList = function(head) {
    const nums =[];
    while(head){
        nums.push(head.val);
        head = head.next;
    }
    
    nums.reverse();
    if(nums.length > 0){
        head = new ListNode(nums[0]);
        let currentNode = head ;
        for(let i =1 ;i< nums.length ;i++){
            currentNode.next = new ListNode(nums[i]);
            currentNode = currentNode.next;
        }
    }else{
        return null;
    }
    
    return head;
};