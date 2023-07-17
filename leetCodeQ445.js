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
    const stack1 = [];
    const stack2 = [];
    const stackSum =[];
    
    while(l1 != null){
        stack1.push(l1.val);
        l1 = l1.next;
    }
    
    while(l2 != null){
        stack2.push(l2.val);
        l2 = l2.next;
    }
    
    let carry = 0;
    while(stack1.length > 0 && stack2.length > 0){
        let sum = stack1.pop() + stack2.pop() + carry;
        if(sum > 9){
            carry = 1;
            sum = sum % 10
        }else{
            carry = 0 ;
        }
        
        stackSum.unshift(sum);
    }
    
    while(stack1.length > 0){
        if(carry > 0){
            let sum = stack1.pop() + carry ;
            if(sum > 9){
                carry = 1;
                sum = sum % 10;
                stackSum.unshift(sum);
            }else{
                carry = 0;
                stackSum.unshift(sum);
            }
        }else{
            stackSum.unshift(stack1.pop());
        }
    }
    
    
    while(stack2.length > 0){
        if(carry > 0){
            let sum = stack2.pop() + carry ;
            if(sum > 9){
                carry =1;
                sum = sum % 10;
                stackSum.unshift(sum);
            }else{
                carry=0;
                stackSum.unshift(sum);
            }
            
        }else{
            stackSum.unshift(stack2.pop());
        }
    }
    
    if(carry > 0){
        stackSum.unshift(carry);
    }
    
    let head = new ListNode(stackSum[0]);
    let currNode = head;
    for(let i = 1; i < stackSum.length; i++ ){
        currNode.next = new ListNode(stackSum[i]);
        currNode = currNode.next;
    }
    
    return head;
};

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
var addTwoNumbersFasterApproach = function(l1, l2) {
   const stack1=[];
   const stack2=[];
   while(l1 != null){
       stack1.push(l1.val);
       l1 = l1.next;
   }

   while(l2 != null){
       stack2.push(l2.val);
       l2 = l2.next;
   }

   let result = null;
   let carry = 0;
   while(stack1.length > 0 || stack2.length > 0 || carry){
       let sum = 0;
       if(stack1.length > 0) sum+=stack1.pop();
       if(stack2.length > 0) sum+=stack2.pop();
       sum += carry ;
       carry = Math.floor(sum / 10);
       result = new ListNode(sum % 10, result); // reverse linked list, from last node start to create, and set it pointer last node. 
   }

   return result;
};