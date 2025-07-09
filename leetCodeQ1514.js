/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {
    const nei = [...Array(n)].map(() => []);
    
    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        nei[a].push([b, succProb[i]]);
        nei[b].push([a, succProb[i]]);
    }
    
    const probs = new Array(n).fill(0);
    let queue = [start];
    probs[start] = 1;
 

    while (queue.length > 0 ) {
        let next = [];
        for (let i of queue) {
            for (let [j, p] of nei[i]) {
                //console.log(j, p , i ,probs[i] * p, probs[j]);
                if (probs[i]*p > probs[j]) {
                    next.push(j);
                    probs[j] = probs[i]*p;
                }
            }
        }
        queue = next;

    }
    
    return probs[end];
};

const n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2;
console.log(maxProbability(n,edges, succProb, start ,end));