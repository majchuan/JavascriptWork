/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let currentTime =  0;
    let totalWaitTime = 0;

    for(let customer of customers){

        if(currentTime >= customer[0]){
            currentTime += customer[1];
        }else{
            currentTime = customer[0] + customer[1];
        }
    
        totalWaitTime += currentTime - customer[0];  
    }

    return totalWaitTime / customers.length;
};