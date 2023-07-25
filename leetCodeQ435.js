/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => {
        return a[0] - b[0];
    });

    let high = intervals[0][1]
    let result = 0 ;

    for(let i = 1 ; i < intervals.length ; i++){
        let currInterval = intervals[i];
     
        if(currInterval[0] >= high){
            high = currInterval[1];
        }else{

            high = Math.min(high, currInterval[1]);
            result++;
        }
    }
    return result;
};