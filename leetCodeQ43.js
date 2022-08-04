/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 const multiply = (num1, num2) => {
    if(!num1 || !num2) return '';
    if(num1 === '0' || num2 === '0') return '0';
    
    let p1 = 0;
    let ans = '';
    while(p1 < num1.length) {
        const factor1 = parseInt(num1.charAt(p1));
        let carry = 0;
        let p2 = num2.length - 1;
        let prodString = '';
        while(p2 >= 0) {
            const factor2 = parseInt(num2.charAt(p2));
            let product = factor1 * factor2 + carry;
            if(product > 9) {
                carry = Math.floor(product / 10);
                product = product % 10;
            } else carry = 0;
            
            prodString = `${product.toString()}${prodString}`;
            
            p2 -= 1;
        }
        
        if(carry > 0) prodString = `${carry}${prodString}`;

        ans = `${ans}0`;
        ans = sum(ans, prodString);
        p1 += 1;
    }
    
    return ans;
};

const sum = (num1, num2) => {
    if(num1.length < num2.length) return sum(num2, num1);
    
    let i = num1.length - 1;
    let j = num2.length - 1;
    let ans = '';
    let carry = 0;
    while (i >= 0) {
        const summand1 = parseInt(num1.charAt(i));
        const summand2 = j < 0 ? 0 : parseInt(num2.charAt(j));
        let sum = summand1 + summand2 + carry;
        if(sum > 9) {
            carry = Math.floor(sum / 10);
            sum = sum % 10;
        } else carry = 0;
        
        ans = `${sum}${ans}`;
        
        i -= 1;
        j -= 1;
    }
    
    if(carry > 0) ans = `${carry}${ans}`;

    return ans;
};