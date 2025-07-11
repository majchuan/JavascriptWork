/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const dp = new Array(questions.length).fill(0) ;;

    return recursion(questions, dp, 0);
    
};

const recursion = (questions, dp , i ) =>{
    if( i >= questions.length){
        return 0;
    }

    if(dp[i] != 0){
        return dp[i]
    }

    let pointers = questions[i][0];
    let next = questions[i][1];

    dp[i] = Math.max(pointers+ recursion(questions, dp,i + next +1) , recursion(questions, dp, i+1 ) );
    return dp[i];
}


const questions= [[21,5],[92,3],[74,2],[39,4],[58,2],[5,5],[49,4],[65,3]];
const questions1=[[21,2],[1,2],[12,5],[7,2],[35,3],[32,2],[80,2],[91,5],[92,3],[27,3],[19,1],[37,3],[85,2],[33,4],[25,1],[91,4],
[44,3],[93,3],[65,4],[82,3],[85,5],[81,3],[29,2],[25,1],[74,2],[58,1],[85,1],[84,2],[27,2],[47,5],[48,4],[3,2],[44,3],[60,5],[19,2],
[9,4],[29,5],[15,3],[1,3],[60,2],[63,3],[79,3],[19,1],[7,1],[35,1],[55,4],[1,4],[41,1],[58,5]]
console.log(mostPoints(questions1));