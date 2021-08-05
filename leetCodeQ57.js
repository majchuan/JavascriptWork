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

//console.log(insert(intervals,newInterval));

const insertInterval = (intervals, newInterval) =>{
    const result = [];
    let i = 0;

    while(i < intervals.length){
        if(newInterval!=null && intervals[i][1] >= newInterval[0] && intervals[i][0] <= newInterval[1]){
            let start = Math.min(intervals[i][0],  newInterval[0]);
            let end = Math.max(intervals[i][1], newInterval[1]);
            if(start <= end){
                newInterval = [start ,end] ;
            }
        }else if(newInterval != null && newInterval[1] < intervals[i][0]){
            result.push(newInterval);
            result.push(intervals[i]);
            newInterval = null ;
        }else{
            result.push(intervals[i]);
        }
        i++;
    }

    if(newInterval != null){
        result.push(newInterval);
    }

    return result;
}

const intervals1 = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval1 = [4,8];

console.log(insertInterval(intervals1,newInterval1));