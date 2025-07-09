/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let count =0;
    for(let start = 0 ; start < arr.length - 1; start++){
        let xorA = 0 ;
        for(let mid = start + 1; mid < arr.length; mid++){
            xorA ^= arr[mid -1];
            let xorB = 0 ;

            for(let end = mid ; end < arr.length ; end++){
                xorB ^= arr[end];
                if(xorA == xorB){
                    count++;
                }
            }
        }
    }

    return count;
};
