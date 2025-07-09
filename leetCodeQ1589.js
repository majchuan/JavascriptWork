/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
 var maxSumRangeQuery = function(nums, requests) {
    let freq = new Array(nums.length).fill(0);

    for(let request of requests){
        for(let i = request[0]; i <= request[1] ; i++){
            freq[i]++;
        }
    }

    nums.sort((a,b) => a-b);
    freq.sort((a,b) => b-a);
    let sum = 0;
    for(let f of freq){
        sum += (f * nums.pop()); 
    }

    return sum % 1000000007;
};