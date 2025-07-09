var fractionToDecimal = function(numerator, denominator) {
    let numer = Math.abs(numerator) ;
    let deno = Math.abs(denominator) ;
    let divide = numer /deno;     
    let reminder = numer % deno ;
    
    let hash_num ={};
    let result ="";
    
    if((numerator > 0 && denominator < 0) || (numerator <0 && denominator > 0) ){
        result +="-"
    }
    
    if(reminder == 0) {
        return result += divide.toString();
    }else{
        result += Math.floor(divide)+"." ;
        
        while(reminder != 0){
        
            reminder *= 10 ;
        
            if(hash_num[reminder]){
                let pos = hash_num[reminder];
                return result.substring(0,pos) +"("+ result.substring(pos,result.length)+")";
            }
            hash_num[reminder] = result.length;
            divide = Math.floor(reminder / deno);
            reminder = reminder % deno;
            result += divide.toString() ; 
        }
    }
    
    return result ;

};

const numerator = 1, denominator = 2;

console.log(fractionToDecimal(numerator,denominator));

console.log(1/333);
console.log(10 % 333)
console.log(100 % 333);
console.log(1000 % 333);