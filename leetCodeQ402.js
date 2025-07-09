/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
/*
*loop the num , and add the number into stack. if the newly number is smaller than the top element of stack, then remove all element bigger than this newly add number 
*in the stack, then push this newly number into stack. once this loop finish. we only select number into new array with current stack length - k.
*/
 var removeKdigits = function(num, k) {
    let stack = [];
    if(num.length == k) return "0";
    for(let i = 0 ; i < num.length; i++){
        if(stack.length == 0){
            stack.push(num[i]);
            continue;
        }
        
        if(stack.length > 0 && stack[stack.length-1] > num[i] && k > 0){
            while(stack[stack.length -1] > num[i] && k > 0){
                stack.pop();
                k--;
            }
        }
        
        stack.push(num[i]);
    }
    stack = stack.slice(0, stack.length -k);
    
    while(stack.length > 1 && stack[0] == 0){
        stack.shift();
    }
    return stack.join("");
};

const num = "14362", k = 3 ; 
const hash_num={};
const findNextBiggerNumRecursive = (num,index, hash_num) =>{

    if(index == num.length) return "";

    for(let i= index ; i < num.length ; i++){
        if((num[index] < num[i+1])){
            let key = num[index].toString() + num[i+1].toString();
            if(hash_num[key] == null) {
                hash_num[key] = num[index] + "=>" + num[i+1];
            }
            console.log(num[index],"=>", num[i+1]);
        }
        findNextBiggerNumRecursive(num,i+1,hash_num);
    }

    if(index == 0){
        console.log(num[num.length-1],"=>","Null");
        key = num[num.length-1] +"Null";
        hash_num[key] = num[num.length-1]+"=>"+"Null";
        return "";
    }else{
        return "";
    }
}

//console.log(findNextBiggerNumRecursive(num,0, hash_num));

for(let key in hash_num){
    console.log(hash_num[key]);
}
const num1 = "147698";
const findNextBiggerNumStack =(num1) =>{
    const stack = [];
    let maxStackVal = Number.MIN_SAFE_INTEGER;
    for(let i = 0 ;  i < num1.length; i++){

        if(stack.length > 0 ){
            let filterNum = stack.filter(x => x < num1[i]) ;

            for(let fm of filterNum){
                console.log(fm, "=>", num1[i]);
            }
            maxStackVal = Math.max(maxStackVal, parseInt(num1[i]));
        }

        stack.push(num1[i]);
    }
    if(maxStackVal != parseInt(num1[num1.length-1])){
        console.log(maxStackVal.toString(), "=>", "Null");
        console.log(num1[num1.length-1], "=>" ,"Null");
    }else{
        console.log(num1[num1.length-1], "=>" ,"Null");
    }
    return "";
}

console.log(findNextBiggerNumStack(num1));