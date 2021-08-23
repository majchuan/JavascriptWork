/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    const courseSchedule = {};
    const visitedCourse = [];
    const result = [];
    
    for(let i = 0 ; i < numCourses ; i++){
        visitedCourse[i] = 0;
    }
    
    for(let i = 0; i < prerequisites.length ; i++){
        courseSchedule[prerequisites[i][0]] ? 
            courseSchedule[prerequisites[i][0]].add(prerequisites[i][1]) :
            courseSchedule[prerequisites[i][0]] = new Set().add(prerequisites[i][1]);
    }
    
    for(let i =0 ; i< numCourses ; i++){
        courseOrder(courseSchedule, visitedCourse, i , result)
    }

    return result;
};
// 0 unvisited
// 1 processed
// 2 processing
const courseOrder = (courseSchedule, visitedCourse,index, result)=>{    
    visitedCourse[index] = 2 ;

    const selectedCourse = courseSchedule[index];
    if(selectedCourse != null){
        for(let courseIndex of selectedCourse){
            if(visitedCourse[courseIndex] != 1){
                courseOrder(courseSchedule,visitedCourse,courseIndex, result);
            }
        }
        result.push(index);
    }
    visitedCourse[index] = 1 ;
}

const numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]];
const numCourses1 =2, prerequisites1=[[0,1]];

console.log(findOrder(numCourses1,prerequisites1));


/*
let visited;
let graph;
let stack;

var findOrder = function(numCourses, prerequisites) {
    
    graph = new Map();
    visited = new Array(numCourses).fill(0);
    stack = new Array();
    
    for(let [v, e] of prerequisites){
        if(graph.has(v)){
            let values = graph.get(v);
            values.push(e);
            graph.set(v, values)
        } else {
            graph.set(v, [e])
        }
    }
    
    for(let i = 0; i < numCourses; i++){
        if(visited[i] == 0 && DFS(i)) return [];
    }
    
    return stack;
}


function DFS(index){
    
    visited[index] = 1;
    let edges = graph.get(index);
    
    if(edges){
        for(let e of edges){
            if(visited[e] == 1) return true;
            if(visited[e] == 0 && DFS(e)) return true
        }  
    }
  
    visited[index] = 2;
    stack.push(index)
    return false
}
*/