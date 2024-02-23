/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const trips = {};
    const memo = {};

    for(let flight of flights){
        const [start, end, price] = flight;
        trips[start] ? trips[start].push([end,price]) : trips[start] = [[end,price]];
    }

    const minCost = dfs(trips,dst, k, src, 0, memo);

    return minCost == Number.MAX_SAFE_INTEGER ? -1 : minCost;
};

const dfs=(trips,dst, k, currStop,currStep,memo)=>{
    
    if(currStop == dst || currStep > k+1){
        if(currStep <= k+1){
            return 0;
        }else{
            return Number.MAX_SAFE_INTEGER;
        }
    }
    const trip = trips[currStop];
    
    if(trip == null) return Number.MAX_SAFE_INTEGER;

    const key = currStop +"|" + currStep;

    if(memo[key] != null) return memo[key];

    let minCost = Number.MAX_SAFE_INTEGER;

    for(let t of trip){
        const [nextStop, cost] = t;
        let total = dfs(trips, dst, k, nextStop, currStep+1, memo);
        minCost = Math.min(minCost, total + cost);
    }

    memo[key] = minCost;
   
    return minCost;
}

const n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1;
console.log(findCheapestPrice(n,flights,src,dst,k));
