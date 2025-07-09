/**
 * @param{number[]} nums
 * @return{number}
 */
var uniqueLetterString = function(s){

}

//print all substring

const findAllSubstringBrutal = (s) =>{
    let substring = "";
    for(let i = 0; i< s.length; i++){
        for(let j = i ; j< s.length ; j++){
            substring += s[j]
            console.log("all substring",substring);
        }
        substring ="";
    }
}

const findAlllSubstringSlideWindows = (s) => {
    
}

console.log(findAllSubstringBrutal("leetcode"));