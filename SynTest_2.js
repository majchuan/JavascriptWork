/*
* enter a line of string, to generate comperession collection
* for example
* island -> i 
* i => i1
* info => in 
* start using first character as a key, if there is collision 
* use together next character as a key 
* if i already exist, use in as key
* cat -> c
* car -> ca
* cadaliac => cad
* caddy => cadd
* alphabet => a
* create a reverse funtion to enter a key string , and get original
* value
*/

const longWords = [
    'cat',
    'car',
    'cadaliac',
    'caddy',
    'alphabet',
    'island',
    'i',
    'info',
    'on',
    'an',
    'have'
]

const reverseString = "i1 h in o a i";

function compression(longWords)
{
    const compressMap = new Map();
    longWords.forEach(element => {
        let compressMapKey = "";
        for(let i=0; i< element.length; i++){
            compressMapKey = compressMapKey + element.charAt(i);
            if(compressMap.has(compressMapKey)===false){
                compressMap.set(compressMapKey,element);
                break;
            }else if(element.length === compressMapKey.length){
                compressMap.set(compressMapKey+(element.length).toString(), element);
                break;
            }
        }
    });

    return compressMap;
}

function reverseCompression(compressed,compressedMap){
    const compressedWords = compressed.split(' ');
    let reverseCompressionString ='';
    compressedWords.forEach(x => {
        const originalString = compressedMap.get(x);
        reverseCompressionString = reverseCompressionString + ' '+ originalString; 
    });

    return reverseCompressionString;
}

console.log(compression(longWords));
console.log(reverseCompression(reverseString,compression(longWords)))