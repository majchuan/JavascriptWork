/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let low = 1 ;
    let high = Math.max(...ranks) * cars * cars;
    let result = 0 ;

    while(low <= high){
        const mid = Math.floor((low+high)/2);
        if(checkRepairCarsNum(ranks, mid, cars)){
            result = mid;
            high = mid - 1 ;
        }else{
            low = mid + 1;
        }
    }

    return result;
};


const checkRepairCarsNum = (ranks, mid, cars) =>{
    let repairedCars = 0 ;
    for(const rank of ranks){
        repairedCars += Math.floor(Math.sqrt(mid / rank));
    }

    return repairedCars >= cars ; 
}