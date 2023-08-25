/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    let size = BigInt(0);
 
     for (let index = 0; index < s.length; index++) {
         const str = s[index];
 
         size = isNaN(str) ? size + BigInt(1) : size * BigInt(str);
     }
 
     for (let index = s.length - 1; index >= 0; index--) {
         const str = s[index];
         const isNumber = !isNaN(str);
 
         k = BigInt(k) % size;
         if ((k == 0 || k == size) && !isNumber) return str;
 
         size = isNumber ? size / BigInt(str) : size - BigInt(1);
     }
     return '';  
 };
 
var decodeAtIndexOutOfMemoery = function(s, k) {
    let stack = [];
    let left = 0 ;
    while(left < s.length){
        if(isNaN(parseInt(s[left]))){
            stack.push(s[left]);
        }else{
            let num = parseInt(s[left]);
            //console.log(num, stack);
            let right = 0 ;
            let prevStack = stack.slice();
            while(right < num - 1){
                if(stack.length >= k){
                    return stack[k-1];
                }else{
                    stack = [...stack , ...prevStack];
                }
                right++;
            }
        }
        left++;
    }
    //console.log(stack);
    return stack[k-1];
};