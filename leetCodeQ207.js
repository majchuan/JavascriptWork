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
console.log(canFinishDFS(numCourse,prerequisites));

console.log(canFinishBFS(numCourse,prerequisites));


