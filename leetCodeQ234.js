/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
   
    let fast = head;
    let slow = head;
    let prev = null;

    while(fast && fast.next){
        fast = fast.next.next;
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    if(fast){
        slow = slow.next;
    }

    while(prev && slow){
        if(prev.val != slow.val){
            return false;
        }
        prev = prev.next;
        slow = slow.next;
    }

    return true;
};

var isPalindromeSlowerArrayApproach = function(head) {
    const palindrome =[];
    let currNode = head;
    while(currNode != null){
        palindrome.push(currNode.val);
        currNode = currNode.next;
    }
    
    let left =0 , right = palindrome.length-1;
    while(left < right){
        if(palindrome[left] != palindrome[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};