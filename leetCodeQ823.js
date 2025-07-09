/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    arr.sort((a,b) => a-b);
    const hash_arr ={};

    for(let root of arr){
        hash_arr[root] =1;

        for(const factor of arr){
            if(factor >= root){
                break;
            }

            if(root % factor == 0 && hash_arr[root/factor]){
                hash_arr[root] += hash_arr[factor] * hash_arr[root/factor];
            }
        }
    }

    return Object.values(hash_arr).reduce((a,b) => a+b, 0) % (10**9 + 7);
};

console.log(numFactoredBinaryTrees([2,3,4]));
