/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountainDP = function(arr) {
    let increase = new Array(arr.length).fill(0);
    let decrease = new Array(arr.length).fill(0);
    let max = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i-1]){
            increase[i] += increase[i-1]+1;
        }
    }

    for (let i =  arr.length-2; i >= 0; i--) {
        if (arr[i] > arr[i+1]){
            decrease[i] += decrease[i+1]+1;
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (decrease[i] > 0 && increase[i] > 0){
            max = Math.max(increase[i] + decrease[i] + 1, max);
        }
    }
    return max
};

var longestMountainTwoPointers = function(arr) {
    let max = 0, left = 0 , right = 0;
    while(left < arr.length){
        right = left;
        if(right < arr.length && arr[right] < arr[right+1]){
            while(right < arr.length && arr[right] < arr[right+1]){
                right++;
            }

            if( right < arr.length && arr[right] > arr[right+1]){
                while(right < arr.length && arr[right] > arr[right+1]){
                    right++;
                }

                max = Math.max(right-left+1, max);
            }
        }

        left = Math.max(left+1, right);
    }

    return max;
};
