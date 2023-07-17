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


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrderEasyUnderstand = function(numCourses, prerequisites) {
    const preCourses = {};
    const result= new Set();;
    const visited = new Set();

    for(let course of prerequisites){
        preCourses[course[0]] ? preCourses[course[0]].add(course[1]) : preCourses[course[0]] = new Set().add(course[1]);
    }

    for(let i = 0 ; i < numCourses; i++){
        if(dfsEasyUnderstand(i, preCourses, visited, result) == false){
            return [];
        }
    }

    return [...result];
};


const dfsEasyUnderstand=(courseIndex, preCourses, visited, result) =>{
    if(visited.has(courseIndex)) return false;

    visited.add(courseIndex);

    const courses = preCourses[courseIndex];

    if(courses == null){
        result.add(courseIndex);
        visited.delete(courseIndex);
        return true;
    }

    for(let currCourse of courses){
        if(dfsEasyUnderstand(currCourse, preCourses, visited, result) == false){
            return false;
        }
    }

    visited.delete(courseIndex);
    preCourses[courseIndex].clear();
    result.add(courseIndex);
    return true;
}