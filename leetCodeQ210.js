/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrderBFS = function(numCourses, prerequisites) {
    const scheduleCourses = {};
    const connectedCourses ={};
    const queue =[];
    const courseOrder = [];
    let courseTakenNumber = 0 ;
    
    for(let [course,prerequisite] of prerequisites){
        scheduleCourses[prerequisite] ? scheduleCourses[prerequisite].add(course) : 
        scheduleCourses[prerequisite] = new Set().add(course);
        connectedCourses[course] ? connectedCourses[course]++ : connectedCourses[course] = 1;
    }
    
    for(let i = 0 ; i < numCourses; i++){
        if(connectedCourses[i] == null){
            queue.push(i);
            while(queue.length > 0){
                const currLength = queue.length;
                for(let i = 0; i < currLength; i++){
                    const numCourse = queue.pop();
                    courseTakenNumber++;
                    courseOrder.push(numCourse);
                    const courses = scheduleCourses[numCourse];
                    if(courses != null){
                        for(let course of courses){
                            if(connectedCourses[course] != null){
                                connectedCourses[course]--;
                                if(connectedCourses[course] == 0){
                                    queue.push(course);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    if(courseTakenNumber == numCourses){
        return courseOrder ;
    }else{
        return [];
    }
    
    
};

 var findOrderDFS = function(numCourses, prerequisites) {
    const courseSchedule = {};
    const visitedCourse = new Array(numCourses).fill(0);
    const result = [];
    
    for(let [course,prerequisite] of prerequisites){
        courseSchedule[prerequisite] ? courseSchedule[prerequisite].add(course) : courseSchedule[prerequisite] = new Set().add(course);
    }
    
    for(let i =0 ; i< numCourses ; i++){
        if(visitedCourse[i] == 0 && courseOrder(courseSchedule, visitedCourse, i , result)){
            return [];
        }
    }

    return result;
};
// 0 unvisited
// 1 processed
// 2 processing
const courseOrder = (courseSchedule, visitedCourse,index, result)=>{    
    if(visitedCourse[index] == 1) return true;
    if(visitedCourse[index] == 2) return false;
    visitedCourse[index] = 2; 

    const selectedCourse = courseSchedule[index];
    if(selectedCourse != null){
        for(let course of selectedCourse){
            if(visitedCourse[course] != 1){
                if(courseOrder(courseSchedule,visitedCourse,course, result)){
                    return true;
                }
            }
        }
    }

    visitedCourse[index] = 1 ;
    result.push(index);
    return false;
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