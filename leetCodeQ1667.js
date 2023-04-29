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


const n = 3, edgeList = [[0,1,2],[1,2,4],[2,0,8],[1,0,16]], queries=[[0,1,2],[0,2,5]];
console.log(distanceLimitedPathsExist(n,edgeList,queries));