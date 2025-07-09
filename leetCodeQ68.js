/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let left = 0 ;
    const result = [];
    while(left < words.length){
        const currLine = getWords(left , words, maxWidth);
        left += currLine.length;
        let line = createLine(currLine, left , words , maxWidth)
        //console.log(line.length);
        result.push(line);
    }

    return result;
};

const getWords = (index , words ,maxWidth) =>{
    const currLine = [];
    let currLength = 0 ;
    while(index < words.length && (currLength + words[index].length <= maxWidth) ){
        currLine.push(words[index]);
        currLength += words[index].length + 1 ;
        index++;
    }

    return currLine;
}

const createLine=(currLine, index , words, maxWidth) =>{
    let baseLength = -1;
    for(let word of currLine){
        baseLength += word.length + 1;
    }
    let extraSpaces = maxWidth - baseLength;

    if(currLine.length == 1 || index == words.length){
        return currLine.join(" ") + " ".repeat(extraSpaces);
    }

    let wordCount = currLine.length - 1 ;
    let spacePerWord = Math.floor(extraSpaces / wordCount);
    console.log(spacePerWord);
    let needExtraSpace = extraSpaces % wordCount;

    for(let i = 0 ; i < needExtraSpace ; i++){
        currLine[i] = currLine[i] + " ";
    }

    for(let i = 0 ; i < wordCount ; i++){
        currLine[i] = currLine[i] +" ".repeat(spacePerWord);
    }

    return currLine.join(" ");

}


var fullJustifySlow = function(words, maxWidth) {
    let left = 0 ;
    let start = 0 ;
    let end = 0 ;
    let currentLength = 0 ;
    let result = [];
    while(left < words.length){
        if(currentLength + words[left].length >= maxWidth){
            end = left -1 ;
            result.push(adjustLine(words, start ,end, maxWidth));
            start = left;
            currentLength = 0;
        }
        currentLength += words[left].length + 1 ;
        left++;
    }

    if(currentLength> 0){
        result.push(adjustLine(words,start , left -1, maxWidth));
    }

    return result;
};

const adjustLine=(words, start ,end, maxWidth)=>{
    let totalLength = 0 ;
    for(let i =start ; i <= end ; i++){
        totalLength += words[i].length;
    }

    let wordspace = Math.floor((maxWidth - totalLength) / (end - start ));
    let extraspace = (maxWidth - totalLength) % (end - start ) ;
    let result =[];

    if(start == end){
        let restLength = maxWidth - totalLength ;
        return words[start] + " ".repeat(restLength);
    }
    if( extraspace != 0 ){

        for(let i = start ; i < start+extraspace ; i++){
            result[i] = words[i] + " ";
        }

        for(let i = start ; i < end ; i++){
            result[i] = (result[i] != null ? result[i] : words[i]) + " ".repeat(wordspace);
        }

        result.push(words[end]);
    }else{

        for(let i = start ; i < end ; i++){
            result[i] = (words[i]) + " ".repeat(wordspace);
        }
        result.push(words[end]);
    }

    return result.join("");

}


const words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16;
const words1= words = ["What","must","be","acknowledgment","shall","be"], maxWidth1 = 16
console.log(fullJustify(words, maxWidth));
