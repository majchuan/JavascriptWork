/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const counts = {};
 
     // Count the frequency of each character in 'chars'
     for (const char of chars) {
         counts[char] = (counts[char] || 0) + 1;
     }
 
     let ans = 0;
 
     // Loop through each word in the 'words' array
     for (const word of words) {
         const wordCount = {};
 
         // Count the frequency of each character in the current word
         for (const char of word) {
             wordCount[char] = (wordCount[char] || 0) + 1;
         }
 
         let good = true;
 
         // Check if the current word can be formed from the characters in 'chars'
         for (const char in wordCount) {
             if (!counts[char] || wordCount[char] > counts[char]) {
                 good = false; // The word cannot be formed
                 break;        // Exit the loop as the word is not valid
             }
         }
 
         // If the word can be formed from the characters in 'chars', add its length to 'ans'
         if (good) {
             ans += word.length;
         }
     }
 
     return ans; // Return the total length of words that can be formed 
 };