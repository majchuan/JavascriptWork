class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right= null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root=null;
    }

    insert(data){
        let newNode =new Node(data) ;
        if(this.root===null){
            this.root = newNode;
        }else{
            if(this.root.data > newNode.data){
                if(this.root.left=== null){
                    this.root.left = newNode;
                }else{
                    this.insertNode(this.root.left, newNode);
                }
            }else{
                if(this.root.right ===null){
                    this.root.right = newNode;
                }else{
                    this.insertNode(this.root.right, newNode);
                }
            }
        }
    }

    insertNode(currentNode, newNode){
        if(currentNode===null){
            currentNode = newNode;
        }else if( currentNode.data > newNode.data){
            if(currentNode.left === null){
                currentNode.left = newNode;
            }else{
                this.insertNode(currentNode.left, newNode);
            }
        }else{
            if(currentNode.right===null){
                currentNode.right = newNode;
            }else{
                this.insert(currentNode.right,newNode);
            }
        }
    }

    remove(data){
        this.root = this.removeNode(this.root, data);
    }

    removeNode(currentNode, data){

        if(currentNode === null){
            return null;
        }else if(currentNode.data < data){
            currentNode.right = this.removeNode(currentNode.right,data);
            return currentNode;
        }else if(currentNode.data > data){
            currentNode.left= this.removeNode(currentNode.left,data);
            return currentNode;
        }else{
            if(currentNode.left && currentNode.right){
                currentNode.data = currentNode.right.data;
                currentNode.right = this.removeNode(currentNode.right, currentNode.right.data); 
                return currentNode;
            }else if(currentNode.right && currentNode.left ===null){
                currentNode.data = currentNode.right.data;
                currentNode.right= this.removeNode(currentNode.right, currentNode.right.data);
                return currentNode;
            }else if(currentNode.left && currentNode.right ===null){
                currentNode.data=currentNode.left.data;
                currentNode.left= this.removeNode(currentNode.left,currentNode.left.data);
                return currentNode;
            }else if(currentNode.left == null && currentNode.right==null){
                currentNode = null ;
                return currentNode;
            }
        }
        

    }

    inOrder(node){
        if(node != null){
            //console.log(node.data);
            this.inOrder(node.left);
            //console.log(node.data);
            this.inOrder(node.right);
            console.log(node.data);
        }
    }
}

let binaryTree = new BinarySearchTree();
binaryTree.insert(15);
binaryTree.insert(25);
binaryTree.insert(10);
binaryTree.insert(7);
binaryTree.insert(22);
binaryTree.insert(17);
binaryTree.insert(13);
binaryTree.insert(5);
binaryTree.insert(9);
binaryTree.insert(27);

//binaryTree.inOrder(binaryTree.root);

binaryTree.remove(5);

binaryTree.remove(7);

binaryTree.inOrder(binaryTree.root);
