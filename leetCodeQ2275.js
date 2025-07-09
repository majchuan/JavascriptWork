/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let max=0;
    for(let position=0;position<=30;position++){
        let cnt=0;
        for(let i=0;i<candidates.length;i++){
            if(candidates[i]>>position & 1){
                cnt++;
            }
        }
        max =  Math.max(max,cnt);
    }
    return max;
};
