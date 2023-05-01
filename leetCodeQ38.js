/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    const digits = [];
    if(n ==1) {
        return "1";
    }

    let result = countAndSay(n-1);
    //console.log(result);

    let count = 1 ;
    let say = "";
    for(let i = 0; i  < result.length ; i++){
        if(result[i]== result[i+1]){
            count++;
        }else{
            say += count.toString() + result[i];
            count = 1 ;
        }
    }

    return say;
};