/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers1 = function(digits) {
    const result = new Set() ;
    const visited = [];
    const currNum =[];
    digits.sort();
    dfs1(digits, currNum, visited, result);
    
    return [...result];
};

const dfs1=(digits, currNum ,visited, result)=>{
    if(currNum.length == 3){
        if(currNum[2] % 2 == 0 || currNum[2] == 0){
            result.add(currNum.join(""));
        }
        return;
    }
    
    for(let i = 0 ; i < digits.length; i++){
        if(currNum[0] ==0) continue 
        
        if( visited[i] == null || visited[i] == false){
            
            visited[i]= true;
            currNum.push(digits[i]);
            dfs1(digits, currNum, visited , result);
            visited[i] = false;
            currNum.pop();
        }
    }
}
const digits = [2,1,3,0];
const digits1= [1,8,7,7,1,1,5,4,0,0,7,5,1,7,9]
console.log(findEvenNumbers1(digits1));