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


/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistanceFasterFunction = function(arrays) {
    if (arrays.length < 2) return 0;

    let globalMin = arrays[0][0];
    let globalMax = arrays[0][arrays[0].length - 1];
    let result = 0;

    for (let i = 1; i < arrays.length; i++) {
        const localMin = arrays[i][0];
        const localMax = arrays[i][arrays[i].length - 1];

        result = Math.max(result, Math.max(localMax - globalMin, globalMax - localMin));

        globalMin = Math.min(globalMin, localMin);
        globalMax = Math.max(globalMax, localMax);
    }

    return result;
};