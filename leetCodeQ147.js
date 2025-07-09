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
 var insertionSortList = function(head) {
    const nums = [];
    while(head){
        nums.push(head.val);
        head = head.next;
    }
    for(let i = 1 ; i < nums.length; i++){
        let key = nums[i];
        let j = i-1;
        while(j >= 0 && nums[j] > key){
            nums[j+1] =nums[j];
            j--;
        }
        
        nums[j+1] = key;
    }
    if(nums.length>0){
        head = new ListNode(nums[0]);
        let currentNode = head;
        for(let i =1 ; i<nums.length; i++){
            currentNode.next = new ListNode(nums[i]);
            currentNode = currentNode.next;
        }
    }else{
        return null;
    }
    
    return head;
};

//Insert sort aloghterim 
const nums=[10,9,8,7,6,5,4,3,2,1];
const insertSort = (nums) =>{

    for(let i = 1 ; i < nums.length ; i++){
        let j = i -1;
        const key = nums[i];
        while(j >= 0 && nums[j] > nums[i] ){
            nums[j+1] =nums[j];
            j--;
        }

        nums[j+1] = key;
    }

    return nums;
}

console.log(insertSort(nums));