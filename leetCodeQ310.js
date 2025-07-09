/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTreesDFS = function(n, edges) {
    if(edges.length === 0) return [0]
    let adjList = new Array(n).fill();
    adjList = adjList.map(() => []);

    let edgeCounts = new Array(n).fill(0);
    edges.forEach(edge => {
        adjList[edge[0]].push(edge[1]);
        adjList[edge[1]].push(edge[0]);
        edgeCounts[edge[0]]++;
        edgeCounts[edge[1]]++;
    })

    let treeNode = edgeCounts.findIndex(n => n === 1);
    let seen = {};
    let maxPath = [];

    function dfs(node, path) {
        seen[node] = true;
        path.push(node);
        if(path.length > maxPath.length) {
            maxPath = path.slice();
        }

        let neighbors = adjList[node];
        for(let neighbor of neighbors) {
            if(!seen[neighbor]) {
                dfs(neighbor, path);
            }
        }
        path.pop();
        seen[node] = false;
    }
    dfs(treeNode, []);
    dfs(maxPath[maxPath.length - 1], []);

    let mid = Math.floor(maxPath.length/2);
    return maxPath.length % 2 === 0 ? maxPath.slice(mid - 1, mid + 1) : maxPath.slice(mid, mid + 1) 
};


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTreesBFS = function(n, edges) {
    if (n === 1) return [0]; // Special case: tree with only one node
    
    // Construct adjacency list
    const adjList = {};
    for (const [u, v] of edges) {
        if (!adjList[u]) adjList[u] = [];
        if (!adjList[v]) adjList[v] = [];
        adjList[u].push(v);
        adjList[v].push(u);
    }

    // Initialize leaves
    let leaves = [];
    for (const node in adjList) {
        if (adjList[node].length === 1) {
            leaves.push(parseInt(node));
        }
    }

    // Iteratively remove leaves until we are left with one or two nodes
    while (n > 2) {
        n -= leaves.length;
        const newLeaves = [];
        for (const leaf of leaves) {
            const neighbor = adjList[leaf].pop(); // Remove the leaf from its neighbor's adjacency list
            adjList[neighbor].splice(adjList[neighbor].indexOf(leaf), 1); // Remove the neighbor from the leaf's adjacency list
            if (adjList[neighbor].length === 1) {
                newLeaves.push(neighbor);
            }
        }
        leaves = newLeaves;
    }

    // The remaining nodes are the roots of the MHTs
    return leaves;
};