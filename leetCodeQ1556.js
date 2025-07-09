/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let counter = 0 ;
    let result ="";
    const nStr = n.toString();
    for(let i = nStr.length-1 ; i >= 0 ; i--){
        if(counter % 3 == 0 && counter != 0){
            result = nStr[i] +"."+result;
        }else{
            result = nStr[i] + result ;
        }
        
        counter++;
    }
    
    return result;
};

const n=987;
const n1=1234;
const n2=123456789;
console.log(thousandSeparator(n2));