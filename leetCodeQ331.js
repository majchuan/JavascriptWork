/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let balance = 1
    for(const node of preorder.split(','))
        if (balance > 0){
            if (node === '#'){ 
                --balance;
            }else{ 
                ++balance;
            }
        }else{
            return false;
        }
    return balance < 1;
};

function TreeNode(val,left,right){
    this.val = (val === undefined ? null : val);
    this.left =(left === undefined ? null : left);
    this.right =(right === undefined ? null : right);
}



const buildTree=(preorder) =>{
    const stack = [] ;
    const root = new TreeNode(preorder[0]);
    stack.push(root);

    for(let i =1 ; i< preorder.length ; i++){
        let temp = null ;
        while(i < preorder.length && stack.length > 0 && preorder[i] > stack[stack.length -1].val ){
            temp = stack.pop();
        }

        if(temp != null){
            temp.right = new TreeNode(preorder[i]);
            stack.push(temp.right);
        }else{
            temp = stack[stack.length -1] ;
            temp.left  = new TreeNode(preorder[i]);
            stack.push(temp.left);
        }
    }

    return root;
}

const preorder= [10, 5, 1, 7, 40, 50];
const preorder1=[9,3,4,1,2,6];
console.log(buildTree(preorder1));