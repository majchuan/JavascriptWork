/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0 , right = letters.length; 
    while(left < right){
        let mid = Math.floor((left+right)/2);

        if(letters[mid].charCodeAt(0) > target.charCodeAt(0)){
            right = mid ;
        }else{
            left = mid + 1 ; 
        }
    }
    //console.log(left);

    if(left == letters.length){
        return letters[0];
    }else{
        return letters[left];
    }
};