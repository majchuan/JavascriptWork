/**
 * @param {string} s
 * @return {number}
 */
/*
 var calculate = function(s) {
  const hash_s = {};
  s = s.split(" ").join('');
  if(isNaN(s)==false){
    return parseInt(s);
  }else{
    return Math.floor(basicCal(s,s.length-1,hash_s));
  }
};

const basicCal = (s, index, hash_s)=>{
  if(isNaN(s[index]) == false){
      if(hash_s[index+1]){
        hash_s[index] = parseInt(s[index] + hash_s[index+1].toString());
      }else{
        hash_s[index] = parseInt(s[index]);
      }
      if(index == 0){
          return hash_s[index];
      }else{
          return basicCal(s,index-1, hash_s);
      }
  }else{
      if(s[index] == "+"){
        return basicCal(s,index-1,hash_s) + hash_s[index+1];
      }

      if(s[index] == "-"){
        return basicCal(s,index-1,hash_s) - hash_s[index+1];
      }

      if(s[index] == "*"){
        return basicCal(s,index-1,hash_s) * hash_s[index+1];
      }

      if(s[index] == "/"){
        return basicCal(s,index-1,hash_s) / hash_s[index+1];
      }
  }
}
*/
const s = "3+22*2";
const s1 =" 3/2 ";
const s2=" 3+5 /   2 ";
const s3 = "42";
const s4="1-1+1"
const s5="14-3/2";
//console.log(calculate(s));



/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [];
  let num = '';
  let sign = null
  // we loop till the full length of the array to account for last sign
  for(let i = 0; i <= s.length; i++){    
    const curr = s[i];
    //handle space
    if(curr === ' ') continue;
    //if char is a number
    if(!isNaN(curr)) num+=curr;
    //if we have a  sign + - / *
    if(isNaN(curr)){
      num = Number(num)
      switch(sign){
        case '+':
        case null:
          //we push the initial number into the stack
          stack.push(num)
          break;
        case '-':
          //we push any values after the subtraction sign as negative
          stack.push(-num)
          break; 
        case '*':
          //we pop the stack then multiply and push back
          stack.push(stack.pop()*num)
          break;
        case '/':
          //we pop the stack then devide and push back

          stack.push(Math.floor(stack.pop()/num));
          //stack.push(parseInt(stack.pop()/num, 10))
          break;           
      }
      // sign becomes current sign
      sign = curr;
      // we reset num
      num = '';
    }
  }
  //we reduce the array adding positive and negative numbers
  return stack.reduce((a,b)=>{
    return a+b
  },0)
};

console.log(calculate(s5));