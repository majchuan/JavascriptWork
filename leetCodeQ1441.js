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