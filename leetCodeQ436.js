/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const rights = [];
    for (let i = 0; i < intervals.length; i++) {
        rights.push([intervals[i][0], i]);
    }

    rights.sort((a, b) => a[0] - b[0]);
    //console.log(rights);
    const ans = [];
    for (let i = 0; i < intervals.length; i++) {
        const target = intervals[i][1];
        let l = 0, r = rights.length;
        while (l < r) {
            const mid = Math.floor((r + l) / 2);
            if (rights[mid][0] >= target) {
                r = mid ;
            } else {
                l = mid + 1 ;
            }
        }
        //console.log(l,r);
        if (l === rights.length) {
            ans[i] = -1;
        } else {
            ans[i] = rights[l][1];
        }
    }

    return ans;
};