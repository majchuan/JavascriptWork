/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
    const hash_n = {};
    const result =[];

    for(let i = 0 ; i < edgeList.length ; i ++){
        hash_n[edgeList[i][0]] ? hash_n[edgeList[i][0]].push([edgeList[i][1], edgeList[i][2]]) : hash_n[edgeList[i][0]]=[[edgeList[i][1],edgeList[i][2]]];
        hash_n[edgeList[i][1]] ? hash_n[edgeList[i][1]].push([edgeList[i][0], edgeList[i][2]]) : hash_n[edgeList[i][1]]=[[edgeList[i][0],edgeList[i][2]]];
    }

    for(let q of queries){
        const start = q[0] , end = q[1], distance= q[2];
        const visited = new Set();
        if(visited.has(start) == false){
            if(dfs(start, end, distance, hash_n, visited)){
                result.push(true);
            }else{
                result.push(false);
            }
        }
    }

    return result;
};

const dfs=(startPoint, endPoint, distance , hash_n, visited)=>{

    if(startPoint == endPoint) return true;

    visited.add(startPoint);

    let next = hash_n[startPoint];

    if(next == null) return false;

    for(let item of next){
        if(visited.has(item[0]) == false && item[1] < distance){
            if(dfs(item[0], endPoint, distance, hash_n, visited)){
                return true;
            }
        }
    }

    return false;
}

/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
class UnionFind {
    constructor(size) {
        this.group = [];
        this.rank = [];
        for (let i = 0; i < size; ++i) {
            this.group[i] = i;
        }
    }
  
    find(node) {
        if (this.group[node] !== node) {
            this.group[node] = this.find(this.group[node]);
        }
        return this.group[node];
    }

    join(node1, node2) {
        let group1 = this.find(node1);
        let group2 = this.find(node2);
        
        // node1 and node2 already belong to same group.
        if (group1 === group2) {
            return;
        }

        if (this.rank[group1] > this.rank[group2]) {
            this.group[group2] = group1;
        } else if (this.rank[group1] < this.rank[group2]) {
            this.group[group1] = group2;
        } else {
            this.group[group1] = group2;
            this.rank[group2] += 1;
        }
    }
    
    areConnected(node1, node2) {
        let group1 = this.find(node1);
        let group2 = this.find(node2);
        return group1 === group2;
    }
}

var distanceLimitedPathsExistUnionFindApproach = function(n, edgeList, queries) {
    let uf = new UnionFind(n);
    let queriesCount = queries.length;
    let answer = new Array(queriesCount);

    // Store original indices with all queries.
    let queriesWithIndex = [];
    for (let i = 0; i < queriesCount; ++i) {
        queriesWithIndex[i] = queries[i];
        queriesWithIndex[i].push(i);
    }

    // Sort all edges in increasing order of their edge weights.
    edgeList.sort((a, b) => a[2] - b[2]);
    // Sort all queries in increasing order of the limit of edge allowed.
    queriesWithIndex.sort((a, b) => a[2] - b[2]);

    let edgesIndex = 0;

    // Iterate on each query one by one.
    queriesWithIndex.forEach(([p, q, limit, queryOriginalIndex]) => {
        // We can attach all edges which satisfy the limit given by the query.
        while (edgesIndex < edgeList.length && edgeList[edgesIndex][2] < limit) {
            let node1 = edgeList[edgesIndex][0];
            let node2 = edgeList[edgesIndex][1];
            uf.join(node1, node2);
            edgesIndex += 1;
        }

        // If both nodes belong to the same component, it means we can reach them. 
        answer[queryOriginalIndex] = uf.areConnected(p, q);
    });

    return answer;
};

const n = 3, edgeList = [[0,1,2],[1,2,4],[2,0,8],[1,0,16]], queries=[[0,1,2],[0,2,5]];
console.log(distanceLimitedPathsExist(n,edgeList,queries));