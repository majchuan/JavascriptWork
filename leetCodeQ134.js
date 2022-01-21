/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) =>{
    const totalGas = gas.reduce((x,y) => x+y , 0);
    const totalCost = cost.reduce((x,y) => x+y, 0);
    if(totalCost > totalGas) return -1;
    for(let i = 0; i < gas.length; i++){
        let currentGas = 0;
        let currentCost = 0 ;
        let j = i ;
        while(j < gas.length && currentGas >= currentCost){
            currentGas += gas[j];
            currentCost += cost[j];
            j++;
        }

        if(currentGas >= currentCost) return i ;
    }

    return -1;
}

var canCompleteCircuit_fast = function(gas, cost) {
    let start = 0, tank = 0, total = 0;
    
    for(let i = 0; i < gas.length; i++) {
        const consume = gas[i] - cost[i];
        tank += consume;

        if(tank < 0) {
            tank = 0;
            start = i + 1;
        }
        total += consume;
    }
    return total < 0 ? -1 : start;
};

const gas = [1,2,3,4,5], cost = [3,4,5,1,2] ; 
const gas1 = [2,3,4], cost1 = [3,4,3];
const gas2 = [5,1,2,3,4], cost2 =[4,4,1,5,1]
console.log(canCompleteCircuit_fast(gas2,cost2));
