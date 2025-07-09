/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function(positive_feedback, negative_feedback, report, student_id, k) {
    const result = [];
    const positiveFeedbackSet = new Set(positive_feedback);
    const negativeFeedbackSet = new Set(negative_feedback);

    for(let i = 0 ; i < student_id.length; i++){
        let studentReports = report[i].split(' '); 
        let scores = 0 ;
        for(let studentReport of studentReports){
            if(positiveFeedbackSet.has(studentReport)){
                scores += 3;
            }
        }

        for(let studentReport of studentReports){
            if(negativeFeedbackSet.has(studentReport)){
                scores -=1;
            }
        }

        result.push([student_id[i], scores]);
    }

    return result.sort((a,b) =>{
        if(a[1] == b[1]){
            return a[0] - b[0];
        }else{
            return b[1] - a[1];
        }
    }).map(x => x[0]).slice(0,k);

};