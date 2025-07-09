/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const ten = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    const twenty = ["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen",
    "Sixteen","Seventeen","Eighteen","Nineteen"];
    const hundred =["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];

    if(num == 0) return "Zero";

    return dfs(ten, twenty, hundred, num);

};

const dfs=(ten, twenty,hundred, num)=>{
    if(num < 10){
        return ten[num];
    }

    if(num < 20){
        return twenty[num-10];
    }

    if(num < 100){
        return hundred[Math.floor(num/10)] + (num % 10 != 0 ? " " + dfs(ten, twenty, hundred, num % 10) : "");
    }

    if (num < 1000) {
        return dfs(ten, twenty, hundred, Math.floor(num / 100)) + " Hundred" + (num % 100 != 0 ? " " + 
        dfs(ten, twenty, hundred, num % 100) : "");
    }
        
    if (num < 1000000) {
        return dfs(ten, twenty, hundred, Math.floor(num / 1000)) + " Thousand" + (num % 1000 != 0 ? " " + 
        dfs(ten, twenty, hundred,num % 1000) : "");
    }
    if (num < 1000000000) {
        return dfs(ten, twenty, hundred, Math.floor(num / 1000000)) + " Million" + (num % 1000000 != 0 ? " " + 
        dfs(ten, twenty, hundred,num % 1000000) : "");
    }
        
    return dfs(ten, twenty, hundred, Math.floor(num / 1000000000)) + " Billion" + (num % 1000000000 != 0 ? " " + 
    dfs(ten,twenty,hundred,num % 1000000000) : "");
}