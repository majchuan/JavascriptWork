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
 var sortList = function(head) {
    const nums =[];
    while(head){
        nums.push(head.val);
        head = head.next;
    }
    if(nums.length > 0){
        const numsSort = mergeSort(nums);

        head = new ListNode();
        let currentNode = head;
        for(let num of numsSort){
            currentNode.next = new ListNode(num);
            currentNode = currentNode.next;
        }
    }else{
        return head;
    }
    
    return head.next;
};

const mergeSort = (nums) =>{
    const midIndex = Math.floor(nums.length/2);
    if(nums.length ==1){
        return nums;
    }
    const numsLeft = mergeSort(nums.slice(0,midIndex));
    const numsRight = mergeSort(nums.slice(midIndex, nums.length));
    
    let mergeNums = [] , i = 0, j= 0;
    while(i < numsLeft.length && j < numsRight.length){
        if(numsLeft[i] > numsRight[j]){
            mergeNums.push(numsRight[j]);
            j++;
        }else{
            mergeNums.push(numsLeft[i]);
            i++;
        }
    }
    
    if(i < numsLeft.length){
        mergeNums = [...mergeNums, ...numsLeft.slice(i,numsLeft.length)];
    }
    
    if(j < numsRight.length ){
        mergeNums = [...mergeNums, ...numsRight.slice(j,numsRight.length)];
    }
    
    return mergeNums;
}
// head = [-1,5,3,4,0]
const nums=[-1,5,3,4,0];
let head = new ListNode();
let currentNode = head;
for(let num of nums){
    currentNode.next = new ListNode(num);
    currentNode = currentNode.next;
}

console.log(sortList(head.next));