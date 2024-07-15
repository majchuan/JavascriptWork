/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const hash_parent_child = {};
    const hash_child_parent = {};
    for(let des of descriptions){
        const [parent,child,isLeft] = des ; 
        hash_parent_child[parent] ? hash_parent_child[parent].push([child,isLeft]) 
        : hash_parent_child[parent] =[[child, isLeft]];
        hash_child_parent[child] ? hash_child_parent[child].push([parent,true]) 
        : hash_child_parent[child] = [[parent, true]];
    }

    const root = findRootNode(hash_parent_child, hash_child_parent);
    if(root == null ) return null;

    const rootNode = new TreeNode(root);

    buildBinaryTree(rootNode, hash_parent_child);

    return rootNode;

};

const findRootNode = (hash_parent_child, hash_child_parent) =>{
    const parents = Object.keys(hash_parent_child);

    for(let root of parents){
        if(hash_child_parent[root] == null) return root;
    }

    return null;
}

const buildBinaryTree  = (node, hash_parent_child) =>{
    let leftNode = null;
    let rightNode = null;
    if(node == null) return;

    const childs = hash_parent_child[node.val];

    if(childs == null){
        return;
    }

    for(let child of childs){
        if(child[1] == 1){
            leftNode = new TreeNode(child[0]);
        }else{
            rightNode = new TreeNode(child[0]);
        }
    }

    node.left = leftNode;
    node.right = rightNode;

    buildBinaryTree(leftNode, hash_parent_child);
    buildBinaryTree(rightNode,hash_parent_child);
}
