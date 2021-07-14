/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    let result = [];
    for(let interval of intervals){
        if(newInterval && newInterval[1] >= interval[0] && newInterval[0] <= interval[1]){
            newInterval = mergeInterval(newInterval , interval) ;
        }else if(newInterval && newInterval[1]<interval[0]){
            result.push(newInterval);
            result.push(interval);
            newInterval = null ;
        }else if(newInterval && newInterval[0]< interval[0] && newInterval[1] > interval[1]){
        }else{
            result.push(interval);
        }
    }
    
    if(newInterval){
        result.push(newInterval);
    }
    
    return result;
    
};

const mergeInterval =(interval1 , interval2) =>{
    return [Math.min(interval1[0],interval2[0]), Math.max(interval1[1],interval2[1])];
}

const  intervals = [[1,3],[6,9]], newInterval = [2,5];

console.log(insert(intervals,newInterval));