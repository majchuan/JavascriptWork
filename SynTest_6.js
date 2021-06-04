/*
Convert a binary tree to a doubly linked list so that the order of the doubly linked list is the same as an in-order traversal of the binary tree.
After conversion, the left pointer of the node should be pointing to the previous node in the doubly linked list, 
and the right pointer should be pointing to the next node in the doubly linked list. Try it yourself before reviewing the solution and explanation.
*/

const LEFT = 0 ;
const RIGHT = 1; 

class TreeNode {
   constructor(val){
       super();
       this.val = val;
       this.descendants =[];
       this.root = null;
   } 

   get left(){
       return this.descendants[LEFT];
   }

}

