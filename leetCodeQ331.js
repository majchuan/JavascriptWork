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

var isValidSerializationDFS = function(preorder) {
    // 将字符串转化成列表
    let nodes = preorder.split(",");
    return deserialize(nodes) && nodes.length === 0;
};

// 改造后的前序遍历反序列化函数
// 详细解析：https://mp.weixin.qq.com/s/DVX2A1ha4xSecEXLxW_UsA
var deserialize = function(nodes) {
    if (nodes.length === 0) {
        return false;
    }

    /****** 前序遍历位置 ******/
    // 列表最左侧就是根节点
    let first = nodes.shift();
    console.log(first);
    if (first === "#") return true;
    /***********************/

    return deserialize(nodes) && deserialize(nodes);
};


console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"));

function TreeNode(val,left,right){
    this.val = (val === undefined ? null : val);
    this.left =(left === undefined ? null : left);
    this.right =(right === undefined ? null : right);
}



const buildSearchTree=(preorder) =>{
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

const preorder1= [8,5,1,7,10,12];
//console.log(buildTree(preorder1));