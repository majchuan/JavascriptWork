/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let minNum = [Number.MAX_SAFE_INTEGER,0];
    let maxNum = [Number.MIN_SAFE_INTEGER,0];

    for(let i = 0 ; i < arrays.length ; i++){
        let currentMinNum = Math.min(...arrays[i]);
        if(minNum[0] > currentMinNum){
            minNum[0] = currentMinNum;
            minNum[1] = i;
        }
    }

    for(let i = 0 ; i < arrays.length ; i++){
        if(minNum[1] == i) continue;
        let currentMaxNum = Math.max(...arrays[i]);
        if(maxNum[0] < currentMaxNum ){
            maxNum[0] = currentMaxNum;
            maxNum[1] = i;
        }
    }

    let maxNumDis1 = maxNum[0] - minNum[0];
    minNum[0] = Number.MAX_SAFE_INTEGER;
    minNum[1] = 0;

    maxNum[0] = Number.MIN_SAFE_INTEGER;
    maxNum[1] = 0;

    for(let i = 0 ; i < arrays.length ; i++){
        let currentMaxNum = Math.max(...arrays[i]);
        if(maxNum[0] < currentMaxNum ){
            maxNum[0] = currentMaxNum;
            maxNum[1] = i;
        }
    }

    for(let i = 0 ; i < arrays.length ; i++){
        if(i == maxNum[1]) continue;
        let currentMinNum = Math.min(...arrays[i]);
        if(minNum[0] > currentMinNum){
            minNum[0] = currentMinNum;
            minNum[1] = i;
        }
    }

    let maxNumDis2 = maxNum[0] - minNum[0];

    return Math.max(maxNumDis1, maxNumDis2);
};