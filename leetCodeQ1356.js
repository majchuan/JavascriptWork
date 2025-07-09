/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const hash_arr = {};

    for(let num of arr){
        const count = num.toString(2).split('1').length - 1 ;
        hash_arr[count] ? hash_arr[count].push(num) : hash_arr[count] = [num];
    }

    let result = [];

    let sortedKey = Object.keys(hash_arr).sort((x,y) => x-y );
    for(let x of sortedKey){
        hash_arr[x].sort((a,b) => a-b);
        result.push(...hash_arr[x]);
    }

    return result;
};