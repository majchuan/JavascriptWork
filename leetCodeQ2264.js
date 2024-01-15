/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let left = 0 ;
    let right = 0 ;
    let maxNum  = -1;

    while(right < num.length){
        if(num[right] == num[left]){
            if(right - left == 2){
                maxNum = Math.max(maxNum, parseInt(num.slice(left, right+1)));
            }
            right++;
        }else{
            left = right;
            right++;
        }
    }

    if(maxNum == 0) return "000";

    if(maxNum == -1) return "";

    return maxNum.toString();
};