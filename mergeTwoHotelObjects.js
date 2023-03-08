/*
Merge HotelRoom object when highPrice + 1 = lowPrice of other object
  Ex.1  [1,2], [3,4] ==> [1,4]
  Ex.2  [1,5],[6,9] ==> [1,9]
  Ex.3 [1,5], [14, 17], [6,9], [10,13] ==> [1,17]
  Ex.3 [1,5], [14, 17], [6,9], [10,13], [4,7], [8,12] ==> [1,17], [4,12]
*/

const { endianness } = require("os");

/**
 * @param int[][] intervals
 * @return int[]
 */
const mergeInterval = (intervals) =>{
    const result = [];
    const hash_EndIntervals = {};
    for(let i = 0 ; i < intervals.length; i++){
        hash_EndIntervals[intervals[i][0]]  = i
    }

    const visited = new Array(intervals.length).fill(false);
    for(let i = 0; i < intervals.length;i++){
        if(visited[i]) continue;

        visited[i] = true;
        let endInterval = intervals[i][1];
        let lastInterval = calculate(endInterval, visited, hash_EndIntervals, intervals);
        result.push([intervals[i][0], lastInterval]);
    }

    return result;
}


const calculate =(endInterval, visited , hash_EndIntervals, intervals) =>{
    while(true){
        if(hash_EndIntervals[endInterval+1] == null  || visited[hash_EndIntervals[endInterval+1]] ) break;

        let index = hash_EndIntervals[endInterval+1];
        visited[index] = true;
        endInterval = intervals[index][1];
    }

    return endInterval;
}

const intervals =[[1,5],[14,17],[6,9],[10,13],[4,7],[8,12]];
console.log(mergeInterval(intervals));