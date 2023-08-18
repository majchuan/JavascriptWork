/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    const hash_roads = {};

    for(let road of roads){
        hash_roads[road[0]] ? hash_roads[road[0]].push(road[1]) : hash_roads[road[0]] =[road[1]];
        hash_roads[road[1]] ? hash_roads[road[1]].push(road[0]) : hash_roads[road[1]] =[road[0]];
    }

    let result = 0;
    for(let i = 0 ; i < n ; i++){
        for(let j = i+1 ; j < n ; j++){
            result = Math.max(result ,cal([i,j], hash_roads, new Set()));
        }
    }
    return result;
};

const twoCities = (index, n) =>{

}

const cal=(road,hash_roads, visited) =>{
    let connectedRoad = 0 ;
    for(let city of road){
        if(visited.has(city)) continue;
        visited.add(city);
        if(hash_roads[city] == null) continue; 
        for(let cr of hash_roads[city]){
            if(visited.has(cr)) continue;
            connectedRoad++;
        }  
    }
    return connectedRoad; 
}