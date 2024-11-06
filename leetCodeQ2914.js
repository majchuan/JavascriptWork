/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    // greedy
    let res = 0;
    for(let i = 0; i < s.length-1; i += 2){
        if(s[i] !== s[i+1]) res++;
    }
    return res;
};

/**
 * @param {string} s
 * @return {number}
 */
var minChangesSlowApproach = function(s) {
    let currentChar = s[0];
    let continueCount = 0;
    let minChangedCount = 0;

    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == currentChar){
            continueCount++;
            continue;
        }

        if(continueCount % 2 == 0){
            continueCount = 1 ;
        }else{
            continueCount = 0;
            minChangedCount++;
        }

        currentChar = s[i];
    }

    return minChangedCount;
};
