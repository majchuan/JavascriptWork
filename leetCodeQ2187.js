/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let left = Math.min(...time);
    let right = Math.min(...time) * totalTrips ; 

    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(checkTrips(time, totalTrips, mid)){
            right = mid;
        }else{
            left = mid+1;
        }
    }

    return left;
};

const checkTrips= (times , totalTrips, mid) =>{
    let trips = 0;
    for(let t of times){
        trips += Math.floor(mid / t);
    }

    return trips >= totalTrips ; 
}