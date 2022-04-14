/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var partition = function(head, x) {
    if (!head)
        return head;
    let p1 = p1_head = { next: null };
    let p2 = p2_head = { next: null };
    let node = head;
    while (node) {
        if (node.val < x) {
            p1.next = node;  
            p1 = p1.next;
        } else {
            p2.next = node;
            p2 = p2.next;
        }      
        node = node.next;
        p1.next = p2.next = null;
    }
    p1.next = p2_head.next;
    return p1_head.next;
};

var partitionSlow = function(head, x) {
    let nums=[];
    if(head == null || head.next == null) return head;
    
    let currNode = head;
    while(currNode != null){
        nums.push(currNode.val);
        currNode = currNode.next;
    }
    
    const lessKNums =[];
    const bigKNums =[];
    for(let i = 0 ; i< nums.length ; i++){
        if(nums[i] < x){
            lessKNums.push(nums[i]);
        }else{
            bigKNums.push(nums[i]);
        }
    }
    
    nums = [... lessKNums, ...bigKNums];
    
    currNode = head;
    for(let i = 0; i < nums.length; i++){
        currNode.next = new ListNode(nums[i]);
        currNode = currNode.next;
    }
    
    return head.next;
    
    
};
/*
*partition with K, small than k , put on the left and sort , biger than k, 
* put the right with keeping its relative order
*/
var partitionkwithInsertSort = function(head, x) {
    const nums = [];
    let curr = head;
    while(curr != null){
        nums.push(curr.val);
        curr = curr.next;
    }
    
    console.log(nums);
    let index = nums.indexOf(x)+1;
    //insert sort.
    for(let i = index; i < nums.length ; i++){
        let j = i -1;
        let key = nums[i];
        if(key > x) continue ; 
        while(j >=0 && nums[j] > key ){
            nums[j+1] = nums[j];
            j--;
        }
        nums[j+1] = key;
        console.log(nums);
    }
    
    console.log(nums);
    
};

const head = new ListNode(1);
head.next = new ListNode(4);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(2);

console.log(partition(head,3));