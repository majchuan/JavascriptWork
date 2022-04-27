/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    const hash_digits ={
        2 : ["a","b","c"],
        3 : ["d","e","f"],
        4 : ["g","h","i"],
        5 : ["j","k","l"],
        6 : ["m","n","o"],
        7 : ["p","q","r","s"],
        8 : ["t","u","v"],
        9 : ["w","x","y","z"]
    }
    
    if(digits.length == 0){
        return [];
    }
    
    if(digits.length == 1){
        return hash_digits[parseInt(digits)];
    }
    
    const result = [];
    dfs(digits, hash_digits, 0 , "" , result);
    
    return result;
    
};

const dfs=(digits, hash_digits , index,curr, result)=>{
    
    if(curr.length == digits.length){
        result.push(curr);
        return;
    }
    
    for(let i = index ; i < digits.length; i++){
        let currDigits = hash_digits[parseInt(digits[i])];
        for(let j = 0; j< currDigits.length; j++){
            let temp = curr;
            curr += currDigits[j];
            //console.log(curr, currDigits, currDigits[j]);
            dfs(digits, hash_digits, i+1, curr, result);
            curr = temp;
        }
    }
}

const digits ="234";
console.log(letterCombinations(digits));
