/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let fractions = [], ans = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            fractions.push([arr[i] / arr[j], arr[i] , arr[j] ]);
        }
    }
    fractions.sort((a, b) => a[0] - b[0]);
    ans[0] = fractions[k-1][1];
    ans[1] = fractions[k-1][2];
    return ans
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFractionBinarySearchApproach = function(arr, k) {
    let n = arr.length; 
    let left = 0 ;
    let right = 1;

    while(left < right){
        let mid =(left + right) / 2 ;

        let maxFraction = 0.0;
        let totalSmallerFractions = 0;
        let numeratorId = 0 ;
        let denominatorId = 0 ;
        let j = 1;
        for(let i = 0 ; i < n -1 ; i++){
            while(j < n && arr[i] >= mid * arr[j]){
                j++;
            }

            totalSmallerFractions += n-j;

            let fraction = arr[i]/ arr[j];

            if(j == n) break;

            if(fraction > maxFraction){
                maxFraction = fraction;
                numeratorId = i;
                denominatorId = j;
            }
        }

        if(totalSmallerFractions == k){
            return [arr[numeratorId], arr[denominatorId]];
        }else if (totalSmallerFractions > k){
            right = mid;
        }else{
            left = mid;
        }
    }
    return [];
};