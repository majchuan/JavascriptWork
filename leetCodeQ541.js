/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const doubleK = k * 2 ; 
    const reminderLength = s.length % doubleK ;
    const totalKnumber = Math.floor(s.length / doubleK) ;
    let str = s.split('');
    
    let i = 1 ; 
    while(i <= totalKnumber){
        let startIndex = (i-1) * doubleK;
        let endIndex = startIndex + k -1 ;
        while(startIndex < endIndex){
            swap(str,startIndex, endIndex);
            startIndex++;
            endIndex--;
        }
        
        i++;
    }
    if(reminderLength < k){
        let startIndex = s.length - reminderLength;
        let endIndex = s.length -1 ;
        while(startIndex < endIndex){
            swap(str, startIndex, endIndex);
            startIndex++;
            endIndex--;
        }
    }else{
        let startIndex = s.length - reminderLength;
        let endIndex = startIndex + k -1;
        while(startIndex < endIndex){
            swap(str, startIndex, endIndex);
            startIndex++;
            endIndex--;
        }
    }
    return str.join('');
};

const swap =(s, i, j) =>{
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
}

const s = "abcdefg", k = 2;
const s1 = "krmyfshbspcgtesxnnljhfursyissjnsocgdhgfxubewllxzqhpasguvlrxtkgatzfybprfmmfithphckksnvjkcvnsqgsgosfxc", k1 =20

console.log(reverseStr(s1,k1));