/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
 var findRadius = function(houses, heaters) {
    let radius = 0;
    let heaterLength = heaters.length;
    houses.sort((x,y) => x -y );
    heaters.sort((x,y) => x -y);
    
    for(let house of houses){
        let left = 0;
        let right = heaterLength;
        while(left < right){
            let mid = Math.floor((left+right)/2);
            if(heaters[mid] < house){
                left = mid+1;
            }else{
                right = mid;
            }
        }
        
        let dist1 = (right == heaterLength) ? Number.MAX_SAFE_INTEGER : heaters[right] - house;
        let dist2 =(right ==0) ? Number.MAX_SAFE_INTEGER : house - heaters[right-1];
        
        radius = Math.max(radius, Math.min(dist1, dist2));
    }
    
    return radius;
};