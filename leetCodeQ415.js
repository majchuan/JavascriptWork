/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i= num1.length - 1 , j = num2.length -1;
    let result = {output :""};
    let up = 0;
    while( i >= 0 && j >= 0){
        up = sumOfTwoNums(num1[i],num2[j],result,up);
        i--;
        j--;
    }   

    while(i >= 0){
        up = sumOfTwoNums(num1[i],"0",result,up);
        i--;
    }

    while(j >= 0){
        up = sumOfTwoNums("0", num2[j], result, up);
        j--;
    }

    if(up == 1){
        result.output = "1" + result.output;
    }
    return result.output;
};

const sumOfTwoNums = (num1,num2 , result, up) =>{
    let sum = parseInt(num1) + parseInt(num2) + up;
    if(sum <= 9){
        result.output = sum.toString() + result.output ;
        up =0;
    }else{
        result.output = (sum - 10).toString() + result.output;
        up = 1;
    }
    return up;
}

const num1 = "11", num2 = "123";
const num3 ="456" , num4 ="77";

console.log(addStrings(num3, num4));