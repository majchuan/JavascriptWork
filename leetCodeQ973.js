/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    const distances=[];
    let i = 0 ;
    
    if (points.length <= k)  return points;
    while( i < points.length){
        
        const twoPointDistance = Math.sqrt(Math.pow(points[i][0],2) + Math.pow(points[i][1],2));
        const closest = {
            point : points[i],
            distance: twoPointDistance
        }
        distances.push(closest);
        i++;
    }
    
    distances.sort((x,y) => x.distance - y.distance);
    return distances.slice(0,k).map(x=> x.point);
    
    
};

const points = [[3,3],[5,-1],[-2,4]], k = 2

console.log(kClosest(points,k));