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
<<<<<<< HEAD
 var isPalindrome = function(head) {
   
=======
const isPalindrome = (head)=>{
    //compare the linked list is palindrome or not, we 
    //can use fast and slow point , fast point will start twice faster than slow point
    //when faster point out of listnode, slow point will be the middle of list node. 
    //so we will create a new listnode add node from back to front.
    //then we compare the prev node and slow node, if there is value not equal.return false;

>>>>>>> 33e96291c844492a203344be5310a078b275ee7d
    let fast = head;
    let slow = head;
    let prev = null;

<<<<<<< HEAD
    while(fast && fast.next){
=======
    while(fast.next){
>>>>>>> 33e96291c844492a203344be5310a078b275ee7d
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
<<<<<<< HEAD
};

var isPalindromeSlowerArrayApproach = function(head) {
=======
}


var isPalindromeSlow = function(head) {
>>>>>>> 33e96291c844492a203344be5310a078b275ee7d
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