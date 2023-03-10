/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let totalBananas = 0 ;
    for(let pile of piles){
        totalBananas += pile;
    }

    let left = 0; right = totalBananas ;

    while(left < right ){
        let mid = Math.floor((left + right)/2);
        if(checkSpeed(piles, mid, h)){
            left = mid + 1 ;
        }else{
            right = mid ;
        }
    } 

    return left;
};

const checkSpeed = (piles, speed, hours) =>{
    let totalHours = 0;

    for(let p of piles){
        totalHours += Math.ceil(p/speed);
    }
    //console.log(totalHours, speed, hours);
    return totalHours > hours ; 
}
