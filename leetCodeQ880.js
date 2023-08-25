/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    let lens = [isNum(s[0]) ? 0 : 1];
    for (let i = 1; i < s.length; i++) {
        let char = s[i];
        if (isNum(char)) {
            lens.push(lens[i - 1] * char);
        } else {
            lens.push(lens[i - 1] + 1);
        }
    }
    console.log(lens);

    for (let i = s.length - 1; i >= 0; i--) {
        k %= lens[i];
        console.log(k, lens[i] , i);
        if (k === 0 && !isNum(s[i])) return s[i];
    }
};

var isNum = function(char) {
    return char >= 0 && char <= 9;
}

var decodeAtIndexOutOfMemoery = function(s, k) {
    let stack = [];
    let left = 0 ;
    while(left < s.length){
        if(isNaN(parseInt(s[left]))){
            stack.push(s[left]);
        }else{
            let num = parseInt(s[left]);
            //console.log(num, stack);
            let right = 0 ;
            let prevStack = stack.slice();
            while(right < num - 1){
                if(stack.length >= k){
                    return stack[k-1];
                }else{
                    stack = [...stack , ...prevStack];
                }
                right++;
            }
        }
        left++;
    }
    //console.log(stack);
    return stack[k-1];
};