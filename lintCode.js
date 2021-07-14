/*
*Q145
*CONVERT A LOWERCASE CHARACTER TO UPPERCASE
*/

const lowercaseToUppercase = (character) =>{
    const upperCaseCharacter = character.toUpperCase();
    return upperCaseCharacter;
}

console.log(lowercaseToUppercase('a'));
console.log(lowercaseToUppercase('b'));

/*
*Q25 
*PRINT X 
n=2
xx
xx
n=3
x  x
 x
x  x
n=4
x   x
  xx
x   x
*/

const printX = (n) =>{
    let lineX = "";
    for(let i = 0 ; i < n; i++){
        for(let j = 0 ; j < n; j++){
            if(i==j || i==(n-j-1)){
                lineX += "x";
            }
            lineX += " ";
        }
        console.log(lineX);
        lineX="";
    }
}

printX(1);
printX(2);
printX(4);
printX(10);

/*
* give a source string, and a target string, you should find first position of target string in source string.
* if it does not exist, return -1.
source ="source" target="target" return -1
source ="abcdabcdefg" target ="bcd" return 1;
*/

/*Brute-force*/

const source ="abcdabcdeft";
const target ="bcd";

const source1="tobeornottobe"
const target1="no";
const target2="tto"
const findTargetString= (source , target) =>{
    for(let i=0; i < source.length - target.length; i++){
        if(source.substring(i,i+target.length) === target){
            return i ;
        }
    }
    return -1;
}

console.log("find target string");
console.log(findTargetString(source1, target2));

/*
*give N 'a' or 'b' combine string, in one time operation, you can change a to b or b to a
*to find mini operations which does not contain three conservice same character like'aaa' or 'bbb'
*/
const minimumMoveSource = "baaaaa";
const miniSource="baaabbaabbba";
const minimumMoves = (minimumMovesSource) =>{
    const consecutiveStringA="aaa";
    const consecutiveStringB="bbb"
    let minimumOperations = 0 ;
    for(let i=0; i< minimumMovesSource.length-3; i++){
        if(minimumMovesSource.substring(i, i+3) == consecutiveStringA || minimumMovesSource.substring(i,i+3) == consecutiveStringB){
            minimumOperations++;
            i=i+3;
        }
    }

    return minimumOperations;
}
console.log("minimummoves");
console.log(minimumMoves(minimumMoveSource));
console.log(minimumMoves(miniSource));

/*
*N string only contain A or B, remove minimum characters to make sure all A before B. if the string only contain
A or B is good.
*/

const deleteStringInRightFormat = (rightFormatString) =>{
    //loop the string one by one if there B, check rest of string how many b 
    let right_A = 0;
    let left_B = 0;
    for(let i=0; i< rightFormatString.length ; i++){
        if(rightFormatString[i]=='A'){
            right_A++;
        }
    }
    let ans = right_A;
    for(let j=0; j< rightFormatString.length; j++){
        if(rightFormatString[j] =='A'){
            right_A--;
        }else{
            left_B++;
        }
        ans = Math.min(ans, right_A+left_B)
    }

    return ans ; 
}

console.log(deleteStringInRightFormat("BAAABAB"));

/*
*Find interviewer minimum cost to CityA, and CityB, the interview group must be same size and minimize the total cost.
input:
cost=[[5,4],[3,6],[1,8],[3,9]]
output:
14
*/

const totalCost = (cost)=>{
    cost.sort( (x,y) => {
        return Math.abs(y[0]-y[1]) - Math.abs(x[0]-x[1])
    });

    let midIndex = Math.floor(cost.length/2);
    let totalCostValue = 0 ;
    let costAInterview= 0;
    let costBinterview =0;

    cost.forEach(x =>{
        if(costBinterview < midIndex && (x[0] > x[1] || costAInterview>=midIndex )){
            totalCostValue += x[1];
            costBinterview++;
        }else if(costAInterview < midIndex &&(x[0]< x[1] || costBinterview >= midIndex)){
            totalCostValue += x[0];
            costAInterview++;
        }else if(x[0] == x[1]){
            if(costAInterview < midIndex){
                totalCostValue +=x[0];
                costAInterview++;
            }else{
                totalCostValue +=x[1];
                costBinterview++;
            }
        }

    });

    console.log(totalCostValue);
}

const cost = [[5,4],[3,6],[1,8],[3,9]];
totalCost(cost);

/*
*Relative Ranks,
*Give scores of N athletes, find their relative reanks and the people with the top three
*highest  scores, who will be ward medals "Gold medal", "silver medal", and "Bronze medal"
*Input:[5,4,3,2,1]
*output:["Gold Medal", "Silver Medal", "Bronze Mdeal","4","5"];
*/

const findRelativeRanks = (nums) =>{
    const ranks =[];
    nums.sort();
    nums.forEach((item,index) => {
        switch(index){
            case 0 : 
                ranks.push("Gold Medal");
                break;
            case 1 : 
                ranks.push("Silver Medal");
                break;
            case 2 : 
                ranks.push("Bronze Medal");
                break;
            default:
                ranks.push(item.toString());
            
        }
    });

    return ranks;
}

const nums=[5,4,3,2,1];
console.log(findRelativeRanks(nums));

/*
*string sorting
*give some string splited by "," , please sort them in lexicographical order 
input "bb, aa, lintcode, c"
output "aa,bb,c,lintcode";
*/

const sortingString = (inputString) =>{
    const splitStringArray = inputString.split(",");
    let swap = false;
    do{
        swap = false ;
        for(let index =0 ; index < splitStringArray.length-1 ; index++){
            if(compareTwoString(splitStringArray[index], splitStringArray[index+1]) > 0 ){
                let temp = splitStringArray[index+1];
                splitStringArray[index+1] = splitStringArray[index];
                splitStringArray[index] = temp;
                swap= true;
            }
        }
        
    }while(swap== true)

    return splitStringArray;
}

const compareTwoString =(strA, strB) =>{
    let length = strA.length > strB.length ? strB.length : strA.length;
    for(let i=0; i < length ; i++){
        const s1 = strA[i];
        const b1 = strB[i];
        if(strA[i] > strB[i]){
            return 1;
        }else if(strA[i] < strB[i]){
            return -1;
        }
    }
    if(strA.length > strB.length){
        return 1;
    }else{
        return -1;
    }
}

const inputString="bb,aa,lintcode,c";
console.log(sortingString(inputString));
