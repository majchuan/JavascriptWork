/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let result = 0 ;
    points.sort((a,b) => a[0] - b[0]);

    for(let i = 0 ; i < points.length - 1; i++){
        result = Math.max(result, points[i+1][0] - points[i][0]);
    }

    return result;
};