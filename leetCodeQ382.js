/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.nodes = head;
    this.size = 0;
    let currNodes = head ;
    while(currNodes){
        this.size++;
        currNodes = currNodes.next;
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let randomNumber = Math.floor(Math.random() * this.size);
    let currNodes = this.nodes;
    let index = 0;
    while(currNodes){
        if(index == randomNumber){
            return currNodes.val;
        }
        currNodes = currNodes.next;
        index++;
    }

    return currNodes.val;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */