/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b) => a[0] - b[0]);
    let count = 1;
    let end = points[0][1];

    for(let i = 1 ; i < points.length; i++){
        if(points[i][0] > end){
            count++;
            end = points[i][1];
        }else{
            end = Math.min(end, points[i][1]);
        }
    }

    return count;
};