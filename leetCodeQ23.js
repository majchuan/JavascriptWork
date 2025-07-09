/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    const result = [];
    for(let listNode of lists){
        let currentNode = listNode;
        while(currentNode != null){
            result.push(currentNode.val);
            currentNode = currentNode.next;
        }
    }
    if(result.length != 0){
        result.sort((x,y) => x-y);
        let head = new ListNode(result[0]);
        let currentNode = head;
        for(let i =1 ; i < result.length; i++){
            currentNode.next = new ListNode(result[i]);
            currentNode = currentNode.next;
        }
        return head;
    }else{
        return null;
    }
    
};

const mergeListFast = (Lists) => {
    if(Lists.length == 0) return null;
    
    let rootNode = Lists[0];

    for(let i = 1 ; i < lists.Length ; i++){
        rootNode = merge(rootNode, Lists[i]);
    }

    return rootNode;
}

const merge =(listNode1, listNode2) =>{
    let head = new ListNode();
    let currNode = head;

    while(listNode1 && listNode2){
        if(listNode1.val < listNode2.val){
            currNode.next = listNode1;
            currNode = currNode.next;
            listNode1 = listNode1.next;
        }else{
            currNode.next = listNode2 ;
            currNode = currNode.next;
            listNode2 = listNode2.next;
        }
    }

    while(listNode1){
        currNode.next = listNode1;
        currNode = currNode.next;
        listNode1 = listNode1.next;
    }

    while(listNode2){
        currNode.next = listNode2;
        currNode = currNode.next;
        listNode2 = listNode2.next;
    }

    return head.next;
}
