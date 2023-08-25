/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let left = 1 ;
    let start = 0 ;
    let end = 0 ;
    let lineSentence =words[0];
    let result = [];
    while(left < words.length){
        if((lineSentence +" "+ words[left]).length >= maxWidth){
            end = left -1 ;
            result.push(adjustLine(words, start ,end, maxWidth));
            start = left;
            lineSentence = "";
        }
        lineSentence += words[++left];
    }

    if(lineSentence.length > 0){
        result.push(adjustLine(words,start , left -1));
    }

    return result;
};

const adjustLine=(words, start ,end, maxWidth)=>{
    let totalLength = 0 ;
    for(let i =start ; i <= end ; i++){
        totalLength += words[i].length;
    }

    let lineBreakLength = 0 ;
    let result ="";
    if((maxWidth - totalLength) % 2 != 0 ){
        lineBreakLength = (maxWidth - totalLength - 1) / 2 ;

        for(let i = start ; i <= end -1 ; i++){
            result += words[i];
            for(let j = 0 ; j < lineBreakLength ; j++){
                result+=" ";
            }
        }

        result += " ";
    }else{
        lineBreakLength = (maxWidth - totalLength) / 2;
        for(let i = start ; i <= end -1 ; i++){
            result += words[i];
            for(let j = 0 ; j < lineBreakLength ; j++){
                result+=" ";
            }
        }
    }

    return result ;

}

const words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16;
console.log(fullJustify(words, maxWidth));