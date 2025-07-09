/*
You are given a string s and an array of strings words of the same length. 
Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, 
in any order, and without any intervening characters.

You can return the answer in any order.

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
 

Constraints:

1 <= s.length <= 104
s consists of lower-case English letters.
1 <= words.length <= 5000
1 <= words[i].length <= 30
words[i] consists of lower-case English letters
*/

const s = "barfoothefoobarman";
const words =["foo","bar"];

const s1 ="wordgoodgoodgoodbestword"
const words1 = ["word","good","best","word"]

function findSubString(s, words, matchWords){
    if(words.length == 0) return [];

    const singleWordLength = words[0].length;
    let tempWords = [...words];
    let result = [];
    let output =[];

    for(let i =0 ; i < s.length ;){
        let singleWords = s.slice(i,i+singleWordLength);
        if(tempWords.includes(singleWords)){
            let index = tempWords.indexOf(singleWords); 
            matchWords.push(tempWords.splice(index,1));
            if(tempWords.length>0){
                result = findSubString(s.slice(i+singleWordLength), tempWords, matchWords);
            }else{
                return matchWords;
            }
        }

        if (result.length  == words.length){
            output.push(i);
            result = [];
            //tempWords = [];
            tempWords =[...words];
            i = i + singleWordLength * words.length;
        }else{
            
            i = i + singleWordLength * (result.length == 0 ? 1 : result.length) ; 
        }

    }

    return output;
}

const outputResult = findSubString(s1,words1,[]);
console.log(outputResult);