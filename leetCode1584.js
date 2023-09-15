/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length;
    const edges = [];

    // Calculate the Manhattan distance between all pairs of points and create edges
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const distance = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            edges.push([i, j, distance]);
        }
    }

    // Sort the edges by their weights (Manhattan distances) in ascending order
    edges.sort((a, b) => a[2] - b[2]);

    let minCost = 0;
    let edgesIncluded = 0;

    // Use an array to represent the parent of each point (Union-Find)
    const parent = new Array(n).fill(0).map((_, i) => i);

    // Function to find the root (representative) of a set
    function find(x) {
        if (x === parent[x]) return x;
        return (parent[x] = find(parent[x])); // Path compression
    }

    // Kruskal's algorithm
    for (const edge of edges) {
        const u = edge[0];
        const v = edge[1];
        const distance = edge[2];

        const parentU = find(u);
        const parentV = find(v);

        if (parentU !== parentV) {
            parent[parentU] = parentV; // Union by rank or size can be added for optimization
            minCost += distance;
            edgesIncluded++;

            // Early exit condition: If we have included n-1 edges, stop
            if (edgesIncluded === n - 1) {
                break;
            }
        }
    }

    return minCost;
};