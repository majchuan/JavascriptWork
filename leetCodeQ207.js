const numCourse =3 ;
const prerequisites =[[1,0],[1,2],[0,1]]

const canFinish = (numCourses, prerequisites) => {
    const courseSchedule = {};
    const visitedCourse = Array(numCourses).fill(0);
     
     prerequisites.forEach(element =>{
        courseSchedule[element[0]] = courseSchedule[element[0]] ? courseSchedule[element[0]].add(element[1]) : new Set().add(element[1]); 
     });
     
     for(let i =0; i < numCourses; i++){
         if(isCourseSchedule(courseSchedule,visitedCourse,i) == true){
             return false;
         }
     }
     
     return true;
};

const isCourseSchedule = (courseSchedule, visitedCourse, index) =>{
    if(visitedCourse[index] == 2) return true;
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
    visistedCourse[index]=1;
    return false;
}

console.log(canFinish(numCourse,prerequisites));