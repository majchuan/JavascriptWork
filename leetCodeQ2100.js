/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
    const increases = new Array(security.length).fill(0);
    const decreases = new Array(security.length).fill(0);
    const result =[];

    for(let i = 1 ; i < security.length; i++ ){
        if(security[i-1] >= security[i]){
            increases[i] = increases[i-1] + 1;
        }
    }

    for(let i = security.length - 2 ; i >=0 ; i--){
        if(security[i] <= security[i+1]){
            decreases[i] = decreases[i+1] + 1; 
        }
    }

    //console.log(increases, decreases);

    for(let i = time ; i < security.length ; i++){
        if(decreases[i] - time  >= 0 && increases[i] - time >= 0){
            result.push(i);
        }
    }

    return result;

};