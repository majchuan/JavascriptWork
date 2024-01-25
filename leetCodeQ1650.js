/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (p, q) {
    const uniqueSet = new Set();
    let node = p ;

    while(node != null){
        uniqueSet.add(node);
        node = node.parent;
    }
    node = q ;
    while(node != null){
        if(uniqueSet.has(node)){
            break;
        }else{
            node = node.parent;
        }
    }
    return node;
};
