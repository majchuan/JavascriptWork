/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    const maxRepeater = 9 ; 
    let repeaterCount = 1;
    let comp ="";
    let currentChar = word[0];
    for(let i = 1; i <= word.length; i++){
        if(word[i] == currentChar){
            repeaterCount++;
        }else{
            comp += repeaterCount + currentChar;
            repeaterCount = 1 ;
            currentChar = word[i];
        }
        if(repeaterCount == maxRepeater){
            comp += "9"+currentChar;
            repeaterCount = 1 ;
            currentChar = word[i+1];
            i++;
        }
    }

    return comp;
};