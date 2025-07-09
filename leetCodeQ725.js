/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let length = 0 ;
    let currNode = head;
    const nodes = [];
    while(currNode != null){
        length++;
        nodes.push(currNode.val);
        currNode = currNode.next;
    }

    let n = 0 ; 
    let rest =  0;
    if(length < k){
        n = 1 ;
        rest =  0;
    }else{
        n = Math.floor(length / k);
        rest = length % k;
    }
    const result = [];
    let left = 0;
    while(left < nodes.length){
        let currLength = 0 ;
        let right = left;
        if(rest != 0){
            currLength = n+1;
            rest -=1;
        }else{
            currLength = n;
        }
        let node = new ListNode(nodes[right]);
        let tempNode = node;
        for(let i = right + 1 ; i < left+currLength ; i++){
            tempNode.next = new ListNode(nodes[i]);
            tempNode = tempNode.next;
        }
        result.push(node);
        left = left + currLength;
    }

    for(let i = result.length ; i < k ; i++){
        result.push(null);
    }


    return result;

};


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToPartsFastApproach= function(head, k) {
    const bucket = new Array(k).fill(null);
    const arr = [];

    let n = 0;
    let cur = head;
    while (cur) {
        arr.push(cur);
        n++;
        cur = cur.next;
    }

    const elementSize = Math.floor(n / k);
    let elementResidual = n % k;
    let current = 0;

    for (let i = 0; i < k; i++) {
        if (elementSize < 1) {
        if (!arr[i]) {
            break;
        }
        bucket[i] = arr[i];
        arr[i].next = null;
        } else {
        bucket[i] = arr[current];
        if (elementResidual > 0) {
            current++;
            elementResidual--;
        }
        current += elementSize - 1;
        if (arr[current]) {
            arr[current].next = null;
        }
        current++;
        }
    }

    return bucket;
};