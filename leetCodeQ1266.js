/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let ans = 0;
    const n = points.length;

    for (let i = 1; i < n; ++i) {
        const diffx = Math.abs(points[i][0] - points[i - 1][0]);
        const diffy = Math.abs(points[i][1] - points[i - 1][1]);

        ans += Math.max(diffx, diffy);
    }

    return ans;
};