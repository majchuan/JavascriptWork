/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let mq = new PriorityQueue({ compare(a, b) { return (a - b); } });
    for (let i = 1; i < heights.length; i++) {
        if (heights[i - 1] >= heights[i]) {
            continue;
        }
        if (ladders) {
            mq.enqueue(heights[i] - heights[i - 1]);
            ladders--;
        } else {
            mq.enqueue(heights[i] - heights[i - 1]);
            let h = mq.dequeue();
            bricks -= h;
            if(bricks < 0) {
                return i - 1;
            }
        }
    }
    return heights.length - 1;
};