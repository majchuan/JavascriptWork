const numCourse =3 ;
const prerequisites =[[1,0],[1,2],[0,1]]

const canFinish = (numCourses, prerequisites) => {
    const courseSchedule = {};
    const visitedCourse =[];
     for(let i =0; i < numCourses ; i++){
         visitedCourse.push(0);
     }
     
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

const isCourseSchedule = (courseSchedule, visistedCourse, index) =>{
    if(visistedCourse[index] == 2) return true;
    visistedCourse[index] = 2; 
    const courseSelected = courseSchedule[index];
    if(courseSelected){
        for(let item of courseSelected){
            if(visistedCourse[item] != 1){
                if(isCourseSchedule(courseSchedule, visistedCourse, item)){
                    return true;
                }
            }
        }
    }
    visistedCourse[index]=1;
    return false;
}

console.log(canFinish(numCourse,prerequisites));