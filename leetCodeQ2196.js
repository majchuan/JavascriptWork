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

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTreeFastApproach = function(descriptions) {
    const parents = new Set();
    const childs = new Set();
    const nodes = new Map();
    for (const [parent, child, isLeft] of descriptions) {
        const parentNode = nodes.get(parent) ?? nodes.set(parent, new TreeNode(parent)).get(parent);
        const currentNode = nodes.get(child) ?? nodes.set(child, new TreeNode(child)).get(child);
        if (isLeft) parentNode.left = currentNode;
        else parentNode.right = currentNode;
        parents.add(parent);
        childs.add(child);
    }
    for (const p of parents) {
        if (!childs.has(p)) return nodes.get(p);
    }
};

