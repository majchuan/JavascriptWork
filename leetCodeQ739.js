/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    const res =  [];
    const stack = [];
    
    temperatures = temperatures.reverse();
    for(let i = 0; i < temperatures.length ; i++){

        while(stack.length > 0 && stack[stack.length-1][0] <= temperatures[i]){
            stack.pop();
        }

        if(stack.length == 0){
            res[i] = 0;
        }else{
            res[i] = i - stack[stack.length-1][1] ;
        }

        stack.push([temperatures[i],i]);
    }

    return res.reverse();
};

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperaturesFasterApproach = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    for(let i = 0 ; i < temperatures.length; i++){
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            let index = stack.pop();
            result[index] = i - index;
        }

        stack.push(i);
    }

    return result;
};