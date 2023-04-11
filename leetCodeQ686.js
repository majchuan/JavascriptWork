/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatchFastApproach = function(a, b) {
    let repeatedA = a;
    let count = 1;
    
    while (repeatedA.length < b.length) {
      repeatedA += a;
      count++;
    }
    
    if (repeatedA.includes(b)) {
      return count;
    } else if ((repeatedA + a).includes(b)) {
      return count + 1;
    }
    
    return -1;
};

var repeatedStringMatch = function(a, b) {
    let aLength = a.length;
    let bLength = b.length; 

    let totalLength = aLength + bLength; 
    let times = Math.ceil(totalLength / aLength);

    let repeat = ""
    for(let i = 1 ; i <= times ; i++){
        repeat += a ; 
        if(checkSubString(repeat,b)){
            return i;
        }
    }

    return -1;
};

const checkSubString = (s1, s2) =>{
    let left1 = 0 , left2 = 0 ;
    if(s1.length < s2.length) return false; 
    while(left1 < s1.length){
        let left = left1;
        while(left < s1.length && left2 < s2.length){
            if(s1[left]!= s2[left2]){
                left2 = 0;
                break;
            }else{
                left++;
                left2++;
            }
        }
        left1++;
        if(left2 == s2.length){
            return true;
        }else{
            left2 = 0;
        }
    }


    return false;
}

const a="abcd" , b = "cdabcdab";
const a1="abc" , b1="cabcabca";
console.log(repeatedStringMatch(a,b));