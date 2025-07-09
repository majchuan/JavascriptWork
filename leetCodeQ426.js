/*
*
Convert binar y search tree to sorted doubly linked list
think of the left and right pointers as synonymous of the previous and next 
pointers in a doubly -linked list
let talk the following bst as an example. if tmay help you understand the
the problem better
     4
    / \
   2   5
  / \
1    3

we want to transform this BST into a cicular doubly linked list.
each node in a doubly linked list has a predecessor and successor.
for a circular doubly linked list, the predecessor of the first element is the last element. 
and the successor of the last element is the first element.
Head - > 1 <->2 <->3 <->4 <->5<->1

speically we want to do the transformation in place. after the 
transformation, the left pointer of the tree node should point to 
its predecessor, and the right pointer should point to tis successor.
we should return the pointer to the first element of the linked list.

*/

function doublyLinkNode(val, pre,next){
    this.val = (val == undefined ? null : val);
    this.pre = (pre == undefined ? null : pre);
    this.next =(next == undefined ? null : next);
}

const convertBinaryTreeToDoubleLinkList = (root) =>{
    const dlNode =new doublyLinkNode();
    buildDoublyLinkedlist(root, dlNode);
    return dlNode;
}

const buildDoublyLinkedlist = (node, doubleLinkNode) =>{
    if(node == null) {
        doubleLinkNode = null;
        return null; 
    }
    if(doubleLinkNode.pre ==null) {
        doubleLinkNode.pre= new doubleLinkNode();
    }
    buildDoublyLinkedlist(node.leftNode, doubleLinkNode.pre);
    doubleLinkNode.val = node.val;
    if(doubleLinkNode.next == null){
        doubleLinkNode.next = new doubleLinkNode();
    }
    buildDoublyLinkedlist(node.rightNode, doubleLinkNode.next);
}