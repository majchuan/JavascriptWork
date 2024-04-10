/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudentsWithStack = function(students, sandwiches) {
    while (students.length > 0 && students.indexOf(sandwiches[0]) !== -1) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            
        }
        else students.push(students.shift());
    }
    return students.length;
};

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudentsWithTwoPointers = function(students, sandwiches) {
    let circleStudentCount = 0 ;
    let squareStudentCount = 0;

    for(let s of students){
        if(s == 0){
            circleStudentCount++;
        }else{
            squareStudentCount++;
        }
    }

    for(let sandwich of sandwiches){
        if(sandwich == 0 && circleStudentCount == 0){
            return squareStudentCount;
        }

        if(sandwich == 1 && squareStudentCount == 0){
            return circleStudentCount;
        }

        if(sandwich == 0){
            circleStudentCount--;
        }else{
            squareStudentCount--;
        }
    }

    return 0;
};

Console.log(countStudentsWithTwoPointers([1,0,1,1,0],[0,0,1,1,1]);
