/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
    let values ="";
    const result =[];
    hash_nums ={};
    for(let num of nums){
        hash_nums[num] ? hash_nums[num]++ : hash_nums[num] = 1;
    }
    while(head){
        if(hash_nums[head.val]){
            values += head.val.toString();
        }else{
            if(values.length > 0) result.push(values);
            values="";
        }
        head = head.next;
    }
    if(values.length > 0){
        result.push(values);
    }
    return result.length;
};