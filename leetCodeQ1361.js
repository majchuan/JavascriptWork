/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    let root = findRoot(n, leftChild, rightChild);
    if(root == -1) return false;
    const seen = new Set();
    const stack = [];
    seen.add(root);
    stack.push(root);

    while(stack.length > 0 ){
        let node = stack.pop();
        const children = [leftChild[node], rightChild[node]];

        for(let child of children){
            if(child != -1){
                if(seen.has(child)){
                    return false;
                }

                stack.push(child);
                seen.add(child);
            }
        }
    }

    return seen.size == n ; 
};

const findRoot=(n, leftChild, rightChild)=>{
    const children = new Set();

    for(let left of leftChild){
        children.add(left);
    }

    for(let right of rightChild){
        children.add(right);
    }

    for(let i = 0 ; i < n ; i++){
        if(children.has(i) == false){
            return i;
        }
    }

    return -1;
}
