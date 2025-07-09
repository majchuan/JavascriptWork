/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    let hash_roads ={};
    let minScore = Number.MAX_SAFE_INTEGER;
    const visited = new Set();
    for(let i = 0 ; i < roads.length ; i++){
        hash_roads[roads[i][0]] ? hash_roads[roads[i][0]].push([roads[i][1], roads[i][2]]) : hash_roads[roads[i][0]] =[ [roads[i][1] , roads[i][2]] ];

        hash_roads[roads[i][1]] ? hash_roads[roads[i][1]].push([roads[i][0], roads[i][2]]) : hash_roads[roads[i][1]] =[ [roads[i][0] , roads[i][2]] ];
    }

    return dfs(1, hash_roads, minScore, visited);
};

const dfs=(index, hash_roads, minScore, visited)=>{
    if(visited.has(index)) return minScore ;
    visited.add(index);
    let next = hash_roads[index];
 
    for(let i = 0 ; i < next.length; i++){
        minScore = Math.min(minScore, next[i][1]);
        minScore = dfs(next[i][0], hash_roads, minScore, visited);
    }
    return minScore;
}


const n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]];
const n1= 6 ,roads1= [[4,5,7468],[6,2,7173],[6,3,8365],[2,3,7674],[5,6,7852],[1,2,8547],[2,4,1885],[2,5,5192],[1,3,4065],[1,4,7357]];
const n2= 14 , roads2= [[12,7,2151],[7,2,7116],[11,14,8450],[11,2,9954],[1,11,3307],[10,7,3561],[10,1,4986],[11,7,7674],[14,2,1764],
[11,12,6608],[14,7,1070],[9,8,2287],[14,12,6559],[1,2,1450],[2,12,9165]];
const n3=3, roads3 =[[3,2,1],[1,3,3]]
console.log(minScore(n3, roads3));