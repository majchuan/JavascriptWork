/**
 * @param {number} num
 * @return {string}
 */
 var toHex = function(num) {
    
    hexadecimal = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    if(num >= 0 ){
        if(num == 0) return num ;
        
        let hex = Math.floor(num / 16);
        if(hex == 0){
            return hexadecimal[num%16];
        }else{
            return (hex < 16 ? hexadecimal[hex] : toHex(hex)) + toHex(num%16);
        }
    }else{
        return toHex(0xffffffff -Math.abs(num) +1);
    }
};

const num = 26;

console.log(toHex(num));

const arr =[];

arr[5] = 6 
console.log(arr);