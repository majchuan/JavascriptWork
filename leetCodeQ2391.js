/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    const travelPreFixSum  = [0,travel[0]];
    for(let i = 1 ; i < travel.length ; i++){
        travelPreFixSum[i+1] = travelPreFixSum[i] + travel[i];
    }
    console.log(travelPreFixSum) ;

    const hash_garbage = {};
    const lastGaragePos ={};
    const garbageType=['M','P','G'];

    for(let i = 0 ; i < garbage.length ; i++){
        const items = garbage[i].split('');
        for(let j = 0 ; j < items.length ; j++){
            lastGaragePos[items[j]] = i ; 
            hash_garbage[items[j]] ? hash_garbage[items[j]]++ : hash_garbage[items[j]] = 1 ;
        }
    }

    let result = 0; 
    for(let type of garbageType){
        if(hash_garbage[type] != null){
            result += hash_garbage[type] + travelPreFixSum[lastGaragePos[type]];
        }
    }
    return result;
};