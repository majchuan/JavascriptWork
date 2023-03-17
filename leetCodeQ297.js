/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var res = [];

    function dfs(node) {
        if (node == null) {
            res.push("N");
            return;
        }

        res.push(node.val.toString());
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    console.log(data);
    var vals = data.split(",");
    var i = 0;

    function dfs() {
        if (vals[i] == "N") {
            i+=1;
            return null;
        }

        var node = new TreeNode(Number(vals[i]));
        i+=1;

        node.left = dfs();
        node.right = dfs();
        return node;
    }

    return dfs();
};