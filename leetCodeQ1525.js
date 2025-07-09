/**
 * @param {string} s
 * @return {number}
 */
 var numSplits = function(s) {
    let counter = 0 ;
    const left_hash={};
    const right_hash={};
    let left_diff_letters = 0;
    let right_diff_letters = 0;
    for(let i = 0 ; i < s.length ; i++){
        left_hash[s[i]] ? left_hash[s[i]]++ : (left_hash[s[i]] = 1, left_diff_letters++);
    }
    for(let i= 0; i < s.length; i++){
        right_hash[s[i]] ? right_hash[s[i]]++ : (right_hash[s[i]]=1, right_diff_letters++);
        left_hash[s[i]]--;
        if(left_hash[s[i]] == 0){
            left_diff_letters--;
        }
        
        if(left_diff_letters == right_diff_letters){
            counter++;
        }
        
    }
    
    
    return counter;
};

const s = "aacaba";
console.log(numSplits(s));