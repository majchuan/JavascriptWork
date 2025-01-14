/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const common = new Set();
    const result = [];
    let count = 0 ;

    for(let i = 0; i < n ; i++){
        if(common.has(A[i])){
            count++;
        }else{
            common.add(A[i]);
        }

        if(common.has(B[i])){
            count++;
        }else{
            common.add(B[i]);
        }

        result.push(count);
    }

    return result;
};