/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinishDFS = (numCourses, prerequisites) => {
    const courseSchedule = {};
    const visitedCourse = Array(numCourses).fill(0);
     
     prerequisites.forEach(element =>{
        courseSchedule[element[0]] = courseSchedule[element[0]] ? courseSchedule[element[0]].add(element[1]) : new Set().add(element[1]); 
     });
     
     for(let i =0; i < numCourses; i++){
         if(visitedCourse[i] == 0 && isCourseSchedule(courseSchedule,visitedCourse,i) == true){
             return false;
         }
     }
     
     return true;
};
// 0 unvisited
// 1 processed
// 2 processing
const isCourseSchedule = (courseSchedule, visitedCourse, index) =>{
    if(visitedCourse[index] == 2) return true;
    if(visitedCourse[index] == 1) return false;
    visitedCourse[index] = 2; 
    const courseSelected = courseSchedule[index];
    if(courseSelected){
        for(let item of courseSelected){
            if(visitedCourse[item] != 1){
                if(isCourseSchedule(courseSchedule, visitedCourse, item)){
                    return true;
                }
            }
        }
    }
    visitedCourse[index]=1;
    return false;
}


const canFinishBFS=(numCourses, prerequisites)=>{
    const courseSchedules = {};
    const initCourses = {};
    const queue =[];
    let counter = 0;

    for(let [course, prerequisite] of prerequisites){
        courseSchedules[prerequisite] ? courseSchedules[prerequisite].add(course) : courseSchedules[prerequisite] = new Set().add(course);
        initCourses[course] ? initCourses[course]++ : initCourses[course] = 1;
    }

    for(let i = 0; i< numCourses ;i++){
        if(initCourses[i] == null){
            queue.push(i);

            while(queue.length > 0 ){
                const currLength = queue.length;
                for(let i = 0 ; i< currLength; i++){
                    const course = queue.shift();
                    counter++;
                    if(courseSchedules[course] != null){
                         for(let courseTaken of courseSchedules[course]){
                             if(initCourses[courseTaken]){
                                 initCourses[courseTaken]--;
                                 if(initCourses[courseTaken]== 0){
                                     queue.push(courseTaken);
                                 }
                             }
                         }
                    }
                }
            }
        }
    }

    return counter == numCourses ; 
}

const numCourse =3 ;
const prerequisites =[[1,0],[1,2],[0,2]]
//console.log(canFinishDFS(numCourse,prerequisites));

//console.log(canFinishBFS(numCourse,prerequisites));


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinishEasyUnderstand = function(numCourses, prerequisites) {
    const preCourses = {};
    const visited = new Set();

    for(let i = 0 ; i < prerequisites.length ; i++){
        const element = prerequisites[i];
        preCourses[element[0]] ? preCourses[element[0]].add(element[1]) : preCourses[element[0]]= new Set().add(element[1]);
    }

    for(let i = 0 ; i < numCourses ; i++){
        if(preCourses[i] != null && isCourseScheduleEasyUnderstand(i, preCourses, visited) == false){
            return false;
        }
    }

    return true;
};

const isCourseScheduleEasyUnderstand = (index, preCourses ,visited)=>{
    if(visited.has(index)) return false ;
    visited.add(index);

    let preCourse = preCourses[index]; 

    if(preCourse){
        for(let courseIndex of preCourse){
            if(isCourseScheduleEasyUnderstand(courseIndex, preCourses, visited) == false){
                return false;
            }
        }
        preCourses[index].clear();
    }
    visited.delete(index);
    return true;

}

const numCourses1 = 5;
const prerequisites1 =[[1,0],[2,0],[2,1],[3,1],[3,2],[4,2],[4,3],[5,3],[5,4],[6,4],[6,5],[7,5],[7,6],[8,6],[8,7],[9,7],[9,8],[10,8],[10,9],
[11,9],[11,10],[12,10],[12,11],[13,11],[13,12],[14,12],[14,13],[15,13],[15,14],[16,14],[16,15],[17,15],[17,16],[18,16],[18,17],[19,17],[19,18],
[20,18],[20,19],[21,19],[21,20],[22,20],[22,21],[23,21],[23,22],[24,22],[24,23],[25,23],[25,24],[26,24],[26,25],[27,25],[27,26],[28,26],[28,27],
[29,27],[29,28],[30,28],[30,29],[31,29],[31,30],[32,30],[32,31],[33,31],[33,32],[34,32],[34,33],[35,33],[35,34],[36,34],[36,35],[37,35],[37,36],
[38,36],[38,37],[39,37],[39,38],[40,38],[40,39],[41,39],[41,40],[42,40],[42,41],[43,41],[43,42],[44,42],[44,43],[45,43],[45,44],[46,44],[46,45],
[47,45],[47,46],[48,46],[48,47],[49,47],[49,48],[50,48],[50,49],[51,49],[51,50],[52,50],[52,51],[53,51],[53,52],[54,52],[54,53],[55,53],[55,54],
[56,54],[56,55],[57,55],[57,56],[58,56],[58,57],[59,57],[59,58],[60,58],[60,59],[61,59],[61,60],[62,60],[62,61],[63,61],[63,62],[64,62],[64,63],
[65,63],[65,64],[66,64],[66,65],[67,65],[67,66],[68,66],[68,67],[69,67],[69,68],[70,68],[70,69],[71,69],[71,70],[72,70],[72,71],[73,71],[73,72],
[74,72],[74,73],[75,73],[75,74],[76,74],[76,75],[77,75],[77,76],[78,76],[78,77],[79,77],[79,78],[80,78],[80,79],[81,79],[81,80],[82,80],[82,81],
[83,81],[83,82],[84,82],[84,83],[85,83],[85,84],[86,84],[86,85],[87,85],[87,86],[88,86],[88,87],[89,87],[89,88],[90,88],[90,89],[91,89],[91,90],
[92,90],[92,91],[93,91],[93,92],[94,92],[94,93],[95,93],[95,94],[96,94],[96,95],[97,95],[97,96],[98,96],[98,97],[99,97]];

console.log(canFinish(numCourses1, prerequisites1));