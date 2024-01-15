/**
 * @param {string[][]} paths
 * @return {string}
 */
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const set = new Set();
    
    for (let i = 0; i < paths.length; i++) {
      set.add(paths[i][0]);
    }
    
    for (let i = 0; i < paths.length; i++) {
      if (!set.has(paths[i][1])) {
        return paths[i][1];
      }
    }
};

var destCitySlowFunction = function(paths) {
    const hash_paths = {};
    for(let path of paths){
        const [start , end] = path;
        hash_paths[start] = end; 
    }

    for(let path of paths){
        const start = path[0];
        const destination = dfs(start , hash_paths, new Set());
        if(destination != null) return destination;
    }

    return "";
};

const dfs = (start, hash_paths, visited) =>{
    if(visited.has(start)) return;

    visited.add(start);

    const destination = hash_paths[start];

    if(destination == null) return start;

    return dfs(destination , hash_paths, visited); 
}