/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
/*
*Tow pointers
*/
 var findRadius = function(houses, heaters) {
    let length = heaters.length;
    let j = 0;
    let radius = 0;
    
    houses.sort((x,y) => x-y);
    heaters.sort((x,y) => x-y);
    
    for(let house of houses){
        while(j < length -1 && (Math.abs(heaters[j+1] - house) <= Math.abs(heaters[j] - house))){
            j++;
        }
        
        radius = Math.max(radius,Math.abs(heaters[j] -house));
    }
    
    return radius;
};
/*
*Binary Search
*/
 var findRadiusBinarySearchApproach = function(houses, heaters) {
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