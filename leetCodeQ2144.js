/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a,b) => a-b);
    let totalCost =  0 ;
    let right = cost.length -1;
    if(cost.length ==1) return cost[0];
    if(cost.length ==2) return cost[0]+cost[1];

    while(right >= 0){

        if(right - 1 >= 0){
            totalCost += cost[right] + cost[right -1];
        }else{
            totalCost += cost[right];
        }
        right = right - 3;
        //console.log(cost);
    }

    return totalCost;
};