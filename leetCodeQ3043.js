/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const prefixMap = new Map();

    for(let num of arr1){
        const strNum = num.toString();
        let prefix = "";
        for(let c of strNum){
            prefix += c;
            prefixMap.set(prefix, (prefixMap.get(prefix) || 0) + 1);
        }
    }
    
    let maxLength = 0 ;

    for(let num of arr2){
        const strNum = num.toString();
        let prefix = "";
        for(let c of strNum){
            prefix += c;
            if(prefixMap.has(prefix)){
                maxLength = Math.max(maxLength, prefix.length);
            }
        }
    }

    return maxLength;
}
