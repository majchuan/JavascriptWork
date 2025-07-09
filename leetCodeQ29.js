/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    if (divisor === 0) return 0;
    if (dividend === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
  
    var isPositive = true;
    if (dividend > 0 !== divisor > 0) isPositive = false;
  
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
  
    var count = 1,
      result = 0,
      base = divisor;
  
    while (dividend >= divisor) {
      count = 1;
      base = divisor;
      while (base <= (dividend >> 1)) {
        base = base << 1;
        count = count << 1;
      }
      result += count;
      dividend -= base;
    }
  
    if (!isPositive) result = -result;
    return result;
}

var divideSlow = function(dividend, divisor) {
    if(divisor == 0) return 0;
    if(dividend == 0) return 0;
    if(dividend == -2147483648 && divisor == -1) return 2147483647  

    let isNegative = false ;
    if((dividend < 0 && divisor > 0) || (dividend > 0 && divisor <0)){
        isNegative = true;
    }

    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor)

    let counter = 0 ;

    while(absDividend >= absDivisor){
        absDividend = absDividend - absDivisor ;
        counter++;
    }

    return isNegative ? -counter : counter ;
};


console.log(divide(10,3));