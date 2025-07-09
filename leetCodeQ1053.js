/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var prevPermOpt1 = function(arr) {
    if(arr.length < 2) return arr
    let i = arr.length-2
    
    while( i >= 0) {
        if(arr[i] > arr[i+1]) break
        i--
    }
    if( i < 0 ) return arr
    
    let j = arr.length-1
    while( j > 0) {
        if(arr[j] < arr[i]) {
            while(arr[j] == arr[j-1]){
                j--
            } 
            [arr[j], arr[i]] = [arr[i], arr[j]]
            break
        }
        j--
    }
    return arr;
    
};

const nums = [3,2,1];
console.log(prevPermOpt1(nums));