/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let currNode = head;
    const hash_node ={};
    let index = 0  ;

    while(currNode != null){
        currNode.index  = index;
        index++;
        currNode = currNode.next;
    }
    
    currNode = head ;
    index = 0;
    while(currNode != null){
        hash_node[index] = new Node(currNode.val);
        currNode = currNode.next;
        index++;
    }
    
    currNode = head;
    index = 0 ;

    while(currNode != null){
        if(currNode.next){
            hash_node[index].next = hash_node[currNode.next.index];
        }
        if(currNode.random){
            hash_node[index].random = hash_node[currNode.random.index];
        }
        currNode = currNode.next;
        index++;
    }
    
    return hash_node[0];

};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomListMap = function(head) {
    let currNode = head;
    const hash_node = new Map();

    while(currNode != null){
        hash_node.set(currNode, new Node(currNode.val));
        currNode = currNode.next;
    }

    //console.log(hash_node);
    
    currNode = head ;

    while(currNode != null){
        hash_node.get(currNode).next = hash_node.get(currNode.next) || null;
        hash_node.get(currNode).random = hash_node.get(currNode.random) || null;
        currNode = currNode.next;
    }
    
    return hash_node.get(head);
    

};
