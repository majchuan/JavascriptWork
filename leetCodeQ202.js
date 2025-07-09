/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    const hash_n = {};
     let result = 0 ;
     while(true){
         while(n>0){
             let val = n % 10;
             result += val*val;
             n= Math.floor(n/10);
         }
         
         n = result;
         if(result == 1) {
             return true;
         }
         if(hash_n[result]){
             break;
         }else{
             hash_n[result] = 1 ;
         }
         result = 0 ;
     }
     
     return result == 1;
 };

 let n = 19;
 console.log(isHappy(n));

 /*
 *two pointers
 */
/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappyTwoPointers = function(n) {
    
    let slow = n, fast = n;
    while (true) {
        slow = find_sum_of_squares(slow);
        fast = find_sum_of_squares(find_sum_of_squares(fast));
        if (slow === fast) {
            break;
        }
    } 
    return slow === 1;
};

function find_sum_of_squares(num){
    let sum = 0;
    while (num > 0) {
        digit = num % 10;
        sum += Math.pow(digit, 2);
        num = Math.floor(num / 10);
    }
    return sum;
}