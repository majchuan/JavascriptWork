/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hash_s ={};
    for(let i = 0 ; i < s.length ; i++){
        if(hash_s[s[i]] != null){
            hash_s[s[i]].push(i);
        }else{
            hash_s[s[i]] = [];
            hash_s[s[i]].push(i);
        }
    }
    for(let key in hash_s){
        if(hash_s[key].length == 1){
            return hash_s[key][0];
        }
    }
    return -1;
};

/*
*Given a stream of characters, find the first non-repeating character from the stream, you need to tell the first 
*non-repeating character in O(1) time at any moment.
*
*/

const firstUniqCharFast = (s) =>{
    const hash_s ={};
    let uniqueChars = [] ;
    for(let i = 0 ; i < s.length; i++){
        if(hash_s[s[i]] != null){
            hash_s[s[i]].push(i);
            if(uniqueChars.findIndex(x => x == s[i]) >= 0){
                uniqueChars.splice(uniqueChars.findIndex(x => x == s[i]),1);
            }
        }else{
            hash_s[s[i]] = [];
            hash_s[s[i]].push(i);
            uniqueChars.push(s[i]);
        }

        if(uniqueChars.length > 0){
            console.log(uniqueChars[0]);
        }
    }
}

const s = "geeksforgeeksandgeeksquizfor";
firstUniqCharFast(s);
