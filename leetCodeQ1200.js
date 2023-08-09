/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let result = [] ; 
    arr.sort((a,b) => a-b);
    let minDiff =  Number.MAX_SAFE_INTEGER ;
    for(let i = 1 ; i < arr.length ; i++){
        let diff = arr[i] - arr[i-1];
        if(diff == minDiff){
            result.push([arr[i-1],arr[i]]);
        }

        if(diff < minDiff){
            minDiff = diff;
            result = [[arr[i-1],arr[i]]];
        }
    }

    return result;
};