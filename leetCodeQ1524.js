/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    const mod = 1000000007;
    let oddCount = 0 ;
    let evenCount = 1 ;
    let prefixSum = 0;
    let result = 0;

    for(let num of arr){
        prefixSum += num;
        if(prefixSum % 2 == 0){
            result = (result + oddCount) % mod;
            evenCount++;
        }else{
            result = ( result + evenCount) % mod;
            oddCount++;
        }
    }

    return result;
};
