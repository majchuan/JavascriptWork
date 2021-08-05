/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const result = [];
    let i = 0 ; j = i+1;
    intervals.sort((x,y) => x[0] - y[0] );
    if(intervals.length < 2){
        result.push(intervals[0]);
        return result;
    }
    if(intervals[i][1] >= intervals[j][0]){
        const start = Math.min(intervals[i][0], intervals[j][0]);
        const end = Math.max(intervals[i][1], intervals[j][1]);
        if(start <= end){
            result.push([start ,end]);
        }
        i=i+2;
    }else{
        result.push(intervals[i]);
        i++;
    }
    
    
    while(i< intervals.length){
        if(result[result.length-1][1] >= intervals[i][0]){
            const start = Math.min(intervals[i][0], result[result.length-1][0]);
            const end = Math.max(intervals[i][1], result[result.length-1][1]);
            if(start <= end){
                result.pop();
                result.push([start ,end]);
            }
        }else{
            result.push(intervals[i]);
        }
        i++;
    }
    
    return result;
};

const intervals=[[1,3]];
const intervals1=[[1,4],[0,0]];
const intervals2=[[1,4],[0,2],[3,5]];
console.log(merge(intervals2));