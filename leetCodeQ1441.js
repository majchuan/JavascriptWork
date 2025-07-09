/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const operation=[];
    let index = 1 ;
    for(let num of target){
        while(index < num ){
            operation.push("Push");
            operation.push("Pop");
            index++;
        }

        operation.push("Push");
        index++;
    }

    return operation;
};


/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArrayTwoPoints = function(target, n) {
    const operation=[];
    let index = 0 ;
    for(let i = 1 ; i <= n ; i++){
        if(target[index] == i){
            operation.push("Push");
            index++;
        }else{
            operation.push("Push");
            operation.push("Pop");   
        }

        if(index == target.length) break;
    }

    return operation
};