/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const freq = new Array(nums.length+1).fill(0);


    for(let [left ,right] of queries){
        freq[left] +=1;
        freq[right+1] -= 1;
    }

   
    let currentOperation = 0 ;
    const operationCount = [];
    for(const f of freq){
        currentOperation += f ;
        operationCount.push(currentOperation);
    }
    
    for(let i = 0; i < nums.length ; i++){
        if(operationCount[i] < nums[i]){
            return false;
        }
    }

    return true;
};
