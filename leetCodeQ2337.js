/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    const n = start.length;
    let startIndex = 0 ; 
    let targetIndex = 0;

    while(startIndex < n || targetIndex < n){
        while(startIndex < n && start[startIndex] =='_'){
            startIndex++;
        }

        while(targetIndex < n && target[targetIndex] == '_'){
            targetIndex++;
        }

        if(startIndex == n || targetIndex == n){
            return startIndex == n && targetIndex == n;
        }

        if(start[startIndex] != target[targetIndex] || 
            start[startIndex] == 'L' && startIndex < targetIndex || 
            start[startIndex] == 'R' && startIndex > targetIndex){
                return false;
            }
        startIndex++;
        targetIndex++;
    }
    return true;
};
