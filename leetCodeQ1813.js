/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    // Helper function to split a sentence into words
   const splitWords = (sentence) => sentence.split(" ");

   // Split both sentences into arrays of words
   let words1 = splitWords(sentence1);
   let words2 = splitWords(sentence2);

   // Ensure words1 is the longer sentence

   let start = 0, end = 0;
   let n1 = words1.length, n2 = words2.length;

   // Compare from the start
   while (start < n2 && words1[start] === words2[start]) start++;

   // Compare from the end
   while (end < n2 && words1[n1 - end - 1] === words2[n2 - end - 1]) end++;

   // Check if the remaining unmatched part is in the middle
   //console.log(n1,n2, start ,end);
   return start + end >= Math.min(n1, n2);
};

//test case
const sentence1 = 'Ogn WtWj HneS', sentence2='Ogn WtWj HneS';
const sentence3 = 'I love day coding', sentence4='I love every coding';