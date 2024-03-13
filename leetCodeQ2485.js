/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const totalSum = (1+n)*n/2;
    let left = 1;
    let right = n;
    if(n ==1) return 1;
    
    while(left < right){
        let mid = Math.floor((left + right)/2);
        let sum = mid*mid;
        if(sum  == totalSum){
            return mid;
        }
        if(sum < totalSum){
            left = mid+1;
        }else{
            right = mid;
        }
    }

    return -1;
};